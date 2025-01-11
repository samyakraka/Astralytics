'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [typingText, setTypingText] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (messages.length > 0 && !typingText) {
      scrollToBottom()
    }
  }, [messages, typingText])

  const simulateTyping = (text: string) => {
    let i = 0
    setTypingText('')
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypingText(prev => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
        setMessages(prev => [...prev, { role: 'assistant', content: text }])
        setTypingText('')
        setIsLoading(false)
      }
    }, 25)
  }

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      setMessages(prev => [...prev, { role: 'user', content: input }])
      setInput('')
      setIsLoading(true)

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        })

        if (response.ok) {
          const data = await response.json()
          simulateTyping(data.response)
        } else {
          throw new Error('Failed to get response from the chatbot')
        }
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." }])
        setIsLoading(false)
      }
    }
  }

  const formatMessage = (content: string) => {
    const lines = content.split('\n')
    return lines.map((line, index) => {
      if (line.startsWith('*') && !line.startsWith('**')) {
        return <li key={index} className="ml-4">{formatLine(line.substring(1).trim())}</li>
      }
      return <p key={index}>{formatLine(line)}</p>
    })
  }

  const formatLine = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={index} className="font-extrabold text-lg">{part.slice(2, -2)}</span>
      } else if (part.startsWith('*') && part.endsWith('*') && !part.includes('**')) {
        return <strong key={index}>{part.slice(1, -1)}</strong>
      }
      return part
    })
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-5xl mx-auto">
      <ScrollArea 
        ref={scrollAreaRef}
        className="flex-1 px-4 py-4 overflow-y-auto"
      >
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient text-center">
              Hello, how can I help?
            </h1>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-secondary text-secondary-foreground font-mono'
                  }`}
                >
                  {message.role === 'assistant' ? formatMessage(message.content) : message.content}
                </div>
              </div>
            ))}
            {typingText && (
              <div className="flex justify-start">
                <div 
                  className="max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-2 bg-secondary text-secondary-foreground font-mono"
                >
                  {formatMessage(typingText)}
                </div>
              </div>
            )}
            {isLoading && !typingText && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-2xl px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </ScrollArea>
      <div className="p-4 border-t bg-background">
        <div className="relative flex items-center max-w-3xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="pr-12 h-12 rounded-full bg-secondary/50 border-secondary"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            disabled={isLoading}
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  )
}


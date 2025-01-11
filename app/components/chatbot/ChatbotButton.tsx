'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare, X } from 'lucide-react'
import Link from 'next/link'

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-4 p-6 bg-background/95 backdrop-blur-sm border border-border rounded-2xl shadow-lg w-80 transform-gpu transition-all duration-200 ease-out">
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Assistant
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get instant help with your social media analytics
          </p>
          <Link href="/chatbot">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
              Start Chat
            </Button>
          </Link>
        </div>
      )}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full shadow-lg transition-all duration-200 ${
          isOpen 
            ? 'bg-secondary hover:bg-secondary/90' 
            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
}


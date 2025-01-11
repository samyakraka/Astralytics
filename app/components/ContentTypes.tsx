'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const contentTypes = [
  { type: 'Static', metric: '2.5K', subMetric: 'likes' },
  { type: 'Carousel', metric: '3.2K', subMetric: 'likes' },
  { type: 'Reel', metric: '10K', subMetric: 'views' },
  { type: 'IGTV', metric: '5K', subMetric: 'views', highlighted: true },
  { type: 'Story', metric: '1.5K', subMetric: 'views' },
]

export default function ContentTypes() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative mb-8">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-hidden scroll-smooth py-4 px-8"
      >
        {contentTypes.map((content) => (
          <div
            key={content.type}
            className={`flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 ${
              content.highlighted ? 'border-purple-500' : 'border-gray-700'
            } flex-shrink-0`}
          >
            <div className="text-sm font-medium">{content.type}</div>
            <div className="text-xl font-bold">{content.metric}</div>
            <div className="text-sm text-gray-400">{content.subMetric}</div>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}


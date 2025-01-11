'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe } from 'lucide-react'

const insights = [
  {
    title: 'Trending Topics',
    description: 'Your content about #summervibe is trending 23% higher than last week',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Audience Growth',
    description: 'You gained 250 new followers in the last 24 hours',
    icon: Users,
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Global Reach',
    description: 'Your posts reached users from 45 different countries',
    icon: Globe,
    color: 'from-pink-500 to-orange-500',
  },
]

export default function InsightsSection() {
  return (
    <div className="container py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Latest Insights
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${insight.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
            <div className="relative p-6 backdrop-blur-md bg-background/40 border border-border/50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <insight.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
              <p className="text-muted-foreground">{insight.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


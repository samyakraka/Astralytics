'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Bookmark, Hash, Clock, AlignLeft } from 'lucide-react'

export default function MetricsGrid({ data }) {
  if (data.length === 0) {
    return null
  }

  const metrics = [
    {
      name: 'Total Likes',
      value: data.reduce((sum, post) => sum + post.likes, 0).toLocaleString(),
      icon: Heart,
    },
    {
      name: 'Total Comments',
      value: data.reduce((sum, post) => sum + post.comments, 0).toLocaleString(),
      icon: MessageCircle,
    },
    {
      name: 'Total Shares',
      value: data.reduce((sum, post) => sum + post.shares, 0).toLocaleString(),
      icon: Share2,
    },
    {
      name: 'Total Saves',
      value: data.reduce((sum, post) => sum + post.saves, 0).toLocaleString(),
      icon: Bookmark,
    },
    {
      name: 'Avg Caption Length',
      value: Math.round(data.reduce((sum, post) => sum + post.captionlength, 0) / data.length),
      icon: AlignLeft,
    },
    {
      name: 'Avg Hashtags',
      value: (data.reduce((sum, post) => sum + post.hashtagscount, 0) / data.length).toFixed(1),
      icon: Hash,
    },
  ]

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 backdrop-blur-sm bg-card/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-purple-500/50"
        >
          <div className="flex items-center space-x-2">
            <metric.icon className="h-5 w-5 text-primary dark:text-purple-400" />
            <h3 className="text-sm font-medium text-muted-foreground dark:text-gray-300">
              {metric.name}
            </h3>
          </div>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-foreground dark:text-white">{metric.value}</p>
        </motion.div>
      ))}
    </div>
  )
}


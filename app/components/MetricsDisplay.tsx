'use client'

import { motion } from 'framer-motion'
import { BarChart2, Users, TrendingUp, Share2, Heart, MessageCircle, Bookmark, Play, ImageIcon, Film, Tv } from 'lucide-react'

const metrics = [
  { name: 'Posts', value: '2.5K', icon: ImageIcon, type: 'Static' },
  { name: 'Stories', value: '1.8K', icon: Film, type: 'Story' },
  { name: 'Reels', value: '850', icon: Play, type: 'Reel' },
  { name: 'Lives', value: '120', icon: Tv, type: 'Live' },
]

const engagementData = [
  { icon: Heart, value: '45.2K', label: 'Likes' },
  { icon: MessageCircle, value: '12.8K', label: 'Comments' },
  { icon: Share2, value: '8.9K', label: 'Shares' },
  { icon: Bookmark, value: '3.2K', label: 'Saves' },
]

export default function MetricsDisplay() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
            <div className="relative p-6 backdrop-blur-md bg-background/40 border border-border/50 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{metric.type}</span>
              </div>
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.name}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 p-6 backdrop-blur-md bg-background/40 border border-border/50 rounded-xl"
      >
        <h3 className="text-xl font-bold mb-6">Engagement Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {engagementData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}


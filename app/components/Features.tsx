'use client'

import { motion } from 'framer-motion'
import { BarChart2, Users, Zap, TrendingUp } from 'lucide-react'

const features = [
  {
    name: 'Advanced Analytics',
    description: 'Track and analyze your social media performance with precision and insight.',
    icon: BarChart2,
  },
  {
    name: 'Audience Insights',
    description: 'Understand your followers and their preferences like never before.',
    icon: Users,
  },
  {
    name: 'Real-time Updates',
    description: 'Get instant notifications and live performance metrics.',
    icon: Zap,
  },
  {
    name: 'Growth Tracking',
    description: 'Monitor your account growth and engagement rates over time.',
    icon: TrendingUp,
  },
]

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-base leading-8 text-muted-foreground"
          >
            Everything you need to manage and grow your social media presence.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative backdrop-blur-sm bg-card/50 p-6 rounded-2xl border border-border/50 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="relative">
                  <div className="rounded-lg p-2 bg-purple-500/10 w-fit">
                    <feature.icon className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


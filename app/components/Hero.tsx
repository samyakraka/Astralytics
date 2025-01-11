'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block">Transform Your</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-500 to-purple-900 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
                Social Media Strategy
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              Unlock powerful insights and analytics to grow your social media presence with AI-driven recommendations and real-time performance tracking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-purple-900 dark:from-purple-400 dark:to-purple-600 hover:opacity-90 transition-opacity"
                asChild
              >
                <Link href="/analytics">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


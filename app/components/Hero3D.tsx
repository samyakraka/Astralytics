'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

function AnimatedSphere() {
  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#8b5cf6"
        roughness={0.1}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  )
}

export default function Hero3D() {
  return (
    <div className="relative h-[80vh] w-full">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            Next-Gen Social Analytics
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Transform your social media strategy with AI-powered insights and real-time analytics
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  )
}


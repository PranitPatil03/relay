'use client'

import { Card } from '@echo/ui/components/ui/card.tsx'
import { motion } from 'framer-motion'
import { Clock, Layout, Rocket, Save, Sparkles, Users } from 'lucide-react'

const limits = [
  {
    icon: Users,
    title: '5 Participants',
    description: 'Up to 5 users per room',
  },
  {
    icon: Layout,
    title: '3 Rooms',
    description: 'Create up to 3 active rooms',
  },
  {
    icon: Save,
    title: '1 Saved Room',
    description: 'Save 1 room for later access',
  },
  {
    icon: Clock,
    title: '30 Min Sessions',
    description: 'Chat sessions up to 30 minutes',
  },
]

export function CurrentLimits() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="limits"
      className="mx-auto my-20 max-w-5xl px-6"
    >
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Free to Use
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Get started with Echo Chat completely free. No credit card required.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {limits.map((limit, index) => (
          <motion.div
            key={limit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="flex flex-col items-center p-4 text-center transition-shadow hover:shadow-md">
              <div className="mb-3 rounded-full bg-gray-100 p-3">
                <limit.icon className="size-5 text-gray-700" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                {limit.title}
              </h3>
              <p className="text-xs text-gray-500">{limit.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Card className="border-2 border-dashed border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 p-6">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="rounded-full bg-purple-100 p-3">
              <Sparkles className="size-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 flex items-center justify-center gap-2 text-lg font-semibold text-gray-900 md:justify-start">
                <Rocket className="size-4 text-purple-600" />
                Pro Plans Coming Soon
              </h3>
              <p className="text-sm text-gray-600">
                We&apos;re working on premium plans with extended limits, more rooms, 
                longer sessions, and additional features. Stay tuned!
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

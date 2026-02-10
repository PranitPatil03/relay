'use client'

import { cn } from '@relay/utils/src'
import { motion } from 'framer-motion'
import { Clock, Layout, Users } from 'lucide-react'
import { useState } from 'react'

const limits = [
  {
    icon: Users,
    title: '50 Participants',
    description: 'Up to 50 users per room',
    hoverColor: '#10B981',
  },
  {
    icon: Layout,
    title: '10 Rooms / Day',
    description: 'Create up to 10 rooms every day',
    hoverColor: '#6366F1',
  },
  {
    icon: Clock,
    title: '30 Min Sessions',
    description: 'Chat sessions up to 30 minutes',
    hoverColor: '#EF4444',
  },
]

interface LimitCardProps {
  icon: React.ElementType
  title: string
  description: string
  index: number
  hoverColor: string
}

function LimitCard({ icon: Icon, title, description, index, hoverColor }: LimitCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        'group relative flex flex-col py-10',
        'lg:border-r lg:border-dashed lg:border-white/10',
        index === 0 ? 'lg:border-l lg:border-dashed lg:border-white/10' : ''
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800/50 to-transparent opacity-0 transition duration-200 group-hover:opacity-100"
      ></div>
      <div className="relative z-10 mb-4 size-7 px-10 transition-all duration-300 group-hover:scale-125">
        <div
          className="transition-colors duration-200 ease-in-out"
          style={{ color: isHovered ? hoverColor : 'white' }}
        >
          <Icon className="size-6" />
        </div>
      </div>
      <div className="relative z-10 mb-2 flex items-center px-10 text-lg font-bold text-white">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-r-full bg-neutral-600 transition duration-200 group-hover:bg-purple-500"></div>
        <span className="inline-block transition duration-200 group-hover:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 mx-auto max-w-xs px-10 text-sm text-neutral-400">
        {description}
      </p>
    </div>
  )
}

export function CurrentLimits() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="limits"
      className="mx-auto my-20 max-w-7xl px-6"
    >
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-white">
          Free to Use
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-400">
          Get started with Relay completely free. No credit card required.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {limits.map((limit, index) => (
          <LimitCard
            key={limit.title}
            icon={limit.icon}
            title={limit.title}
            description={limit.description}
            index={index}
            hoverColor={limit.hoverColor}
          />
        ))}
      </div>
    </motion.div>
  )
}



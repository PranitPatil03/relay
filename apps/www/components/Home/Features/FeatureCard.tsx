import { cn } from '@relay/utils/src'
import { useState } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  index: number
  label?: string
  hoverColor?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  index,
  label,
  hoverColor = '#3B82F6',
}: FeatureCardProps) {
  const direction = index < 3 ? 'up' : 'down'
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        'group relative flex flex-col py-10',
        direction === 'up'
          ? 'lg:border-b lg:border-dashed lg:border-white/10'
          : '',
        'lg:border-r lg:border-dashed lg:border-white/10',
        index === 0 || index === 3
          ? 'lg:border-l lg:border-dashed lg:border-white/10'
          : '',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'group pointer-events-none absolute inset-0 h-full w-full opacity-0 transition duration-200 group-hover:opacity-100',
          direction === 'up'
            ? 'bg-gradient-to-t from-neutral-800/50 to-transparent'
            : 'bg-gradient-to-b from-neutral-800/50 to-transparent'
        )}
      ></div>
      <div className="relative z-10 mb-4 size-7 px-10 transition-all duration-300 group-hover:scale-125">
        <div
          className="transition-colors duration-200 ease-in-out"
          style={{ color: isHovered ? hoverColor : 'white' }}
        >
          {icon}
        </div>
      </div>
      <div className="relative z-10 mb-2 flex items-center px-10 text-lg font-bold text-white">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-r-full bg-neutral-600 transition duration-200 group-hover:bg-purple-500"></div>
        <span className="inline-block transition duration-200 group-hover:translate-x-2">
          {title}
          {label && (
            <span className="ml-5 inline-flex items-center rounded-full bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
              {label}
            </span>
          )}
        </span>
      </div>
      <p className="relative z-10 mx-auto max-w-xs px-10 text-sm text-neutral-400">
        {description}
      </p>
    </div>
  )
}

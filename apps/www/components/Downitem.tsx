'use client'

import { DropdownMenuItem } from '@relay/ui/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
  icon: React.ReactNode
  title: string
  href?: string
  onClick?: () => void
}

const Downitem = ({ icon, title, href, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <DropdownMenuItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="flex cursor-pointer items-center justify-start gap-2.5 text-neutral-700 hover:bg-neutral-100 dark:text-gray-300 dark:hover:bg-neutral-800"
    >
      {React.cloneElement(icon as React.ReactElement, {
        animate: isHovered,
        className: 'size-4 text-neutral-600 dark:text-gray-400',
      })}
      <span className="font-normal text-neutral-700 dark:text-gray-300">
        {title}
      </span>
    </DropdownMenuItem>
  )
}

export default Downitem

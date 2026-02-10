'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
  icon: React.ReactNode
  title: string
  url: string
}

const SideBarItem = ({ icon, title, url }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const isActive = pathname === url
  return (
    <Link
      href={url}
      className={`flex items-end justify-start gap-2.5 rounded-lg p-2 text-sm leading-none outline-none transition-all duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-black/50 ${
        isActive
          ? 'border border-neutral-200/50 bg-[#FEFFFE] text-neutral-900 shadow-sm'
          : 'border border-transparent text-neutral-600 hover:bg-[#FEFFFE] active:bg-[#FBFBFA]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.cloneElement(icon as React.ReactElement, {
        animate: isHovered,
        className: `size-4 ${isActive ? 'stroke-blue-600' : 'stroke-neutral-500'}`,
      })}
      <span
        className={` ${isActive ? 'font-medium text-blue-600' : 'font-medium text-neutral-600'}`}
      >
        {title}
      </span>
    </Link>
  )
}

export default SideBarItem

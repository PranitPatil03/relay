'use client'

import { Separator } from '@relay/ui/components/ui/separator.tsx'
import { SidebarTrigger } from '@relay/ui/components/ui/sidebar.tsx'
import { usePathname } from 'next/navigation'

import { NavUser } from '../Root-user'

export function TopBar() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  const lastSegment = pathSegments[pathSegments.length - 1]
  const title = lastSegment
    ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
    : 'Dashboard'

  return (
    <div className="mx-auto w-full max-w-screen-xl bg-[#FEFFFE] px-3 md:hidden lg:px-10 border-b border-neutral-200/50 shadow-sm">
      <header className="flex h-12 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-neutral-200/50" />
          <h1 className="text-xl font-semibold leading-7 text-neutral-900 md:text-2xl">
            {title}
          </h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <NavUser />
        </div>
      </header>
    </div>
  )
}

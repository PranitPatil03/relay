'use client'

import { NavBar } from '@/components/Home/NavBar'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <NavBar />
      <main className="flex-1">{children}</main>
      <footer className="h-20 bg-[#0a0a0a]" />
    </div>
  )
}

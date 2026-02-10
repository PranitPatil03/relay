'use client'

import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { navLinks } from '@/constants'

import { AuthLinks } from './AuthLinks'
import HamburgerMenu from './HamburgerMenu'
import { NavLinks } from './NavLinks'

const DesktopNav = () => {
  return (
    <div className="z-[60] mx-auto hidden w-full max-w-7xl items-center justify-between px-7 py-4 lg:flex">
      <Link href="/" className="z-[60] text-xl font-bold text-white">
        Relay
      </Link>

      <NavLinks />
      <AuthLinks isScrolled={false} />
    </div>
  )
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative z-50 mx-auto space-y-2 lg:hidden">
      <div className="relative flex w-full items-center justify-between px-4 py-4">
        <Link href="/" className="z-[60] text-xl font-bold text-white">
          Relay
        </Link>

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="overflow-hidden"
      >
        <div className="flex w-full flex-col items-start justify-start gap-4 border-t border-white/10 bg-[#0a0a0a]/95 px-4 py-6 backdrop-blur-md">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-neutral-300 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="block">{label} </span>
            </Link>
          ))}
          <div className="grid w-full flex-col gap-2 pt-4">
            <Link
              href="/login"
              className="button relative block w-full cursor-pointer rounded-md border border-white/20 bg-white/10 px-4 py-2 text-center text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="button relative block w-full cursor-pointer rounded-md bg-white px-4 py-2 text-center text-sm font-bold text-black transition duration-200 hover:-translate-y-0.5"
            >
              Sign up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const NavBar = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (value) => {
      setIsScrolled(value > 20)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] w-full bg-[#0a0a0a]/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <DesktopNav />
      <MobileNav />
    </motion.div>
  )
}

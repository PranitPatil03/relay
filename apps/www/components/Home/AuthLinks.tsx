'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import { useUser } from '@/hooks/useSession'

import { Button } from '../shared/Button'

export const AuthLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const { data } = useUser()
  return (
    <motion.div className="z-[60] hidden items-center gap-2 lg:flex">
      <AnimatePresence initial={false}>
        {data ? (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <Button className="rounded-lg border border-white/20 bg-transparent p-1.5 px-4 text-white/80 shadow-none transition-all duration-300 ease-in-out hover:bg-white/10">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="duration-600 ease rounded-lg bg-white p-1.5 px-4 text-black transition-all hover:bg-neutral-100">
                Sign up
              </Button>
            </Link>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

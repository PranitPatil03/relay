'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { CurrentLimits } from '@/components/Home/CurrentLimits'
import { FeatureCards } from '@/components/Home/Features/FeatureCards'
import { Hero } from '@/components/Home/Hero'
import { useUser } from '@/hooks/useSession'

export default function Page() {
  const router = useRouter()
  const { data } = useUser()

  useEffect(() => {
    if (data?.user) {
      router.replace('/dashboard')
    }
  }, [data, router])

  return (
    <>
      <Hero />
      <FeatureCards />
      <CurrentLimits />
    </>
  )
}

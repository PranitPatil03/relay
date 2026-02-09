'use client'
import { useRouter } from 'next/navigation'
import { useAction } from 'next-safe-action/hooks'
import { toast } from 'sonner'

import { useUser } from '@/hooks/useSession'
import { activateFreePlanAction } from '@/lib/actions/plansActions'

import { Button } from '../shared/Button'

export function PricingCardButton() {
  const { data, isLoading } = useUser()
  const router = useRouter()

  const { executeAsync, isExecuting } = useAction(activateFreePlanAction, {
    onSuccess: () => {
      toast.success('Successfully activated Free plan')
      router.push('/dashboard')
    },
    onError: () => {
      toast.error('Failed to activate plan')
    },
  })

  const isSubscription = !!data?.user?.subscription

  const handleClick = () => {
    if (!data?.user) {
      toast.info('Please login first')
    } else {
      executeAsync()
    }
  }

  return (
    <Button
      className="mt-3 w-full rounded-lg bg-black text-white hover:bg-black/90"
      onClick={handleClick}
      disabled={isExecuting || isSubscription || isLoading}
      isLoading={isExecuting}
    >
      {isSubscription ? 'Current Plan' : 'Get Started Free'}
    </Button>
  )
}

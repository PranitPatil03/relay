import { Card } from '@echo/ui/components/ui/card.tsx'
import { Separator } from '@echo/ui/components/ui/separator.tsx'
import React from 'react'

import { PricingPlan } from '@/types'

import { Feature } from './Feature'
import { IconWrapper } from './IconWrapper'
import { PricingCardButton } from './PricingCardButton'

export function PricingCard({
  name,
  icon,
  description,
  price,
  features,
}: PricingPlan) {
  return (
    <Card className="relative w-[350px] rounded-3xl border-2 border-gray-200 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <IconWrapper icon={icon} size="md" />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="mb-4 text-gray-500">{description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-800">${price}</span>
          <span className="ml-2 text-gray-600">/month</span>
        </div>
      </div>
      <Separator />

      <div className="my-4 space-y-2">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
      <Separator />

      <PricingCardButton />
    </Card>
  )
}

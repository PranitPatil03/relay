import { Button } from '@relay/ui/components/ui/button'
import { Input } from '@relay/ui/components/ui/input'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

import { AccountCard } from './AccountCard'

interface EmailSectionProps {
  email: string
}

export function EmailSection({ email }: EmailSectionProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    toast.success('Email copied to clipboard')
  }

  return (
    <AccountCard
      title="Email Address"
      description="Your account email address."
    >
      <div className="flex w-full max-w-md gap-2 md:gap-3">
        <Input
          className="bg-neutral-50 text-xs text-neutral-900 md:text-sm dark:bg-neutral-800 dark:text-neutral-100"
          type="email"
          value={email}
          disabled
        />
        <Button
          variant="ghost"
          size="icon"
          className="size-8 shrink-0 md:size-9"
          onClick={handleCopy}
        >
          <Copy className="size-3.5 md:size-4" />
        </Button>
      </div>
    </AccountCard>
  )
}

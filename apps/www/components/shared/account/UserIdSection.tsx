import { Button } from '@relay/ui/components/ui/button.tsx'
import { Input } from '@relay/ui/components/ui/input.tsx'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

import { AccountCard } from './AccountCard'

interface UserIdSectionProps {
  userId: string
}

export function UserIdSection({ userId }: UserIdSectionProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(userId)
    toast.success('User ID copied to clipboard')
  }

  return (
    <AccountCard title="User ID" description="Your unique account identifier.">
      <div className="flex w-full gap-2 md:max-w-md">
        <Input
          className="bg-neutral-50 dark:bg-neutral-800 font-mono text-sm text-neutral-900 dark:text-neutral-100"
          type="text"
          value={userId}
          disabled
        />
        <Button
          variant="ghost"
          size="icon"
          className="size-9 shrink-0"
          onClick={handleCopy}
        >
          <Copy className="size-4" />
        </Button>
      </div>
    </AccountCard>
  )
}

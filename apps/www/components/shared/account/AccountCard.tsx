import { Button } from '@relay/ui/components/ui/button'
import { ReactNode } from 'react'

interface AccountCardProps {
  title: string
  description: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  isDestructive?: boolean
}

export function AccountCard({
  title,
  description,
  children,
  footer,
  className = '',
  isDestructive = false,
}: AccountCardProps) {
  const borderColor = isDestructive
    ? 'border-red-200 dark:border-red-900'
    : 'border-neutral-200 dark:border-neutral-800'

  return (
    <div
      className={`overflow-hidden rounded-lg border ${borderColor} bg-[#FEFFFE] shadow-sm transition-shadow hover:shadow-md dark:bg-[#1A1A1A] dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.3)] dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="relative flex flex-col space-y-3 p-3 md:space-y-4 md:p-4">
        <div className="flex flex-col space-y-1 md:space-y-2">
          <h2
            className={`text-sm font-medium md:text-base ${isDestructive ? 'text-red-600 dark:text-red-400' : 'text-neutral-900 dark:text-neutral-100'}`}
          >
            {title}
          </h2>
          <p className="text-xs text-neutral-500 md:text-sm dark:text-neutral-400">
            {description}
          </p>
        </div>
        {children}
      </div>
      {footer && (
        <>
          <div
            className={`border-t bg-[#FBFBFA] dark:bg-[#252525] ${borderColor}`}
          >
            <div className="p-1.5 md:p-2">{footer}</div>
          </div>
        </>
      )}
    </div>
  )
}

export function CardFooterButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      type="submit"
      variant="ghost"
      className="h-7 text-xs md:h-8 md:text-sm"
      {...props}
    >
      {children}
    </Button>
  )
}

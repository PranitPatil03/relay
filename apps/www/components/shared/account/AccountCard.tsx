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
    ? 'border-red-200 dark:border-red-900 shadow-none'
    : 'border-transparent shadow-none'

  return (
    <div
      className={`overflow-hidden rounded-lg ${borderColor} bg-transparent ${className}`}
    >
      <div
        className={`relative flex flex-col justify-between p-3 md:flex-row md:items-center md:p-4`}
      >
        <div className="flex flex-1 flex-col space-y-1 pr-4 md:space-y-2">
          <h2
            className={`text-sm font-medium md:text-base ${isDestructive ? 'text-red-600 dark:text-red-400' : 'text-neutral-900 dark:text-neutral-100'}`}
          >
            {title}
          </h2>
          <p className="text-xs text-neutral-500 md:text-sm dark:text-neutral-400">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">{children}</div>
      </div>
      {footer && (
        <>
          <div className="w-full px-4 pb-4 sm:ml-auto sm:w-auto sm:px-4 sm:pb-4">
            <div className="flex justify-start bg-transparent sm:justify-end">
              {footer}
            </div>
          </div>
        </>
      )}
      {!footer && (
        <div className="border-b border-neutral-200 py-2 dark:border-neutral-800"></div>
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

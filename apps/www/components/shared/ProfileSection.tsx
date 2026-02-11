'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@relay/ui/components/ui/avatar'
import { useAction } from 'next-safe-action/hooks'

import { useUser } from '@/hooks/useSession'
import { logout } from '@/lib/actions/authActions'

import { LogoutIcon } from '../icons/animated/logout'
import FilledUser from '../icons/FilledUser'

export function ProfileSection() {
  const { data, isLoading } = useUser()
  const { execute: handleLogout } = useAction(logout, {
    onSuccess: () => {
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    },
  })

  return (
    <div className="w-full space-y-3 p-3">
      {/* Profile Header */}
      <div className="flex items-center gap-3 px-2">
        <Avatar className="size-10 rounded-lg">
          {isLoading ? (
            <div className="size-10 animate-pulse rounded-lg bg-neutral-200" />
          ) : (
            <>
              <AvatarImage
                src={data?.user?.image ?? ''}
                alt={data?.user?.name}
              />
              <AvatarFallback className="size-10 rounded-lg bg-neutral-200 text-xs font-medium">
                <FilledUser className="size-5 fill-neutral-600 stroke-neutral-700" />
              </AvatarFallback>
            </>
          )}
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-neutral-900">
            {isLoading ? (
              <div className="h-4 w-24 animate-pulse rounded bg-neutral-200" />
            ) : (
              data?.user?.name || 'User'
            )}
          </div>
          <div className="truncate text-xs text-neutral-500">
            {isLoading ? (
              <div className="mt-1 h-3 w-32 animate-pulse rounded bg-neutral-200" />
            ) : (
              data?.user?.email || ''
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-1 border-t border-neutral-200/50 pt-3">

        <button
          onClick={() => handleLogout(undefined)}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-neutral-700 transition-colors hover:bg-[#FEFFFE]"
        >
          <LogoutIcon className="size-4 text-neutral-600" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

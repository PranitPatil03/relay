'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@relay/ui/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@relay/ui/components/ui/dropdown-menu'
import { SidebarMenuButton, useSidebar } from '@relay/ui/components/ui/sidebar'

import { useUser } from '@/hooks/useSession'

import { UserIcon } from './icons/animated/user'
import FilledUser from './icons/FilledUser'
import AccountDialog from './shared/AccountDialog'
import { LogoutButton } from './shared/LogoutButton'

export function NavUser() {
  const { data, isLoading } = useUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton asChild>
          <Avatar className="group relative size-5 rounded-full bg-neutral-200 p-0 outline-none ring-offset-1 ring-offset-neutral-100 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-black/10 focus-visible:ring-2 focus-visible:ring-black/50 active:ring-black/15 data-[state='open']:ring-black/15 sm:inline-flex sm:size-6 dark:bg-neutral-700 dark:ring-offset-neutral-800 dark:hover:ring-white/20 dark:focus-visible:ring-white/50 dark:active:ring-white/30 dark:data-[state='open']:ring-white/30">
            {isLoading ? (
              <div className="size-5 animate-pulse rounded-full bg-neutral-200 sm:size-6 dark:bg-neutral-700" />
            ) : (
              <>
                <AvatarImage
                  src={data?.user?.image ?? ''}
                  alt={data?.user?.name}
                />
                <AvatarFallback className="size-5 rounded-lg bg-neutral-200 text-xs font-medium sm:size-6 dark:bg-neutral-700">
                  <FilledUser className="size-4 fill-black/70 stroke-black/80 sm:size-5 dark:fill-white/70 dark:stroke-white/80" />
                </AvatarFallback>
              </>
            )}
          </Avatar>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-2 w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
        align="start"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-6 rounded-lg sm:size-8">
              {isLoading ? (
                <div className="size-6 animate-pulse rounded-full bg-neutral-200 sm:size-8 dark:bg-neutral-700" />
              ) : (
                <>
                  <AvatarImage
                    src={data?.user?.image ?? ''}
                    alt={data?.user?.name}
                  />
                  <AvatarFallback className="size-6 rounded-lg bg-neutral-200 text-xs font-medium sm:size-8 dark:bg-neutral-700">
                    <FilledUser className="size-4 fill-black/70 stroke-black/80 sm:size-5 dark:fill-white/70 dark:stroke-white/80" />
                  </AvatarFallback>
                </>
              )}
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-neutral-900 dark:text-white">
                {data?.user?.name}
              </span>
              <span className="truncate text-xs text-neutral-500 dark:text-gray-400">
                {data?.user?.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-200 dark:bg-neutral-800" />
        <DropdownMenuGroup>
          <div>
            <AccountDialog
              trigger={
                <button className="flex w-full items-center gap-3 rounded px-2 py-1.5 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-gray-300 dark:hover:bg-neutral-800">
                  <UserIcon className="size-4 text-neutral-600 dark:text-gray-400" />
                  <span className="text-neutral-700 dark:text-gray-300">
                    Account
                  </span>
                </button>
              }
            />
          </div>

          <LogoutButton />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

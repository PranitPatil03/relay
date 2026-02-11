'use client'

import React from 'react'

import { useAction } from 'next-safe-action/hooks'

import { LogoutIcon } from '@/components/icons/animated/logout'
import { AccountCard } from '@/components/shared/account/AccountCard'
import { DeleteAccountSection } from '@/components/shared/account/DeleteAccountSection'
import { EmailSection } from '@/components/shared/account/EmailSection'
import { NameSection } from '@/components/shared/account/NameSection'
import { ProfileSection } from '@/components/shared/account/ProfileSection'
import { UserIdSection } from '@/components/shared/account/UserIdSection'
import { Button } from '@/components/shared/Button'
import { useUser } from '@/hooks/useSession'
import { logout } from '@/lib/actions/authActions'
import { LoadingSpinner } from '@relay/ui/icons/spinner'

export default function ProfilePage() {
    const { data, isLoading } = useUser()
    const user = data?.user

    const { execute: handleLogout, isExecuting: isLoggingOut } = useAction(
        logout,
        {
            onSuccess: () => {
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            },
        }
    )

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <LoadingSpinner className="size-8" />
            </div>
        )
    }

    return (
        <div className="flex h-full flex-1 flex-col overflow-hidden bg-white">
            <div className="flex-none border-b border-neutral-200/50 bg-white px-8 py-6">
                <h1 className="text-2xl font-semibold text-neutral-900">Profile</h1>
                <p className="mt-1 text-sm text-neutral-500">
                    Manage your account settings and preferences
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
                <div className="mx-auto max-w-4xl space-y-6">
                    <ProfileSection image={user?.image} />
                    <NameSection defaultName={user?.name || ''} />
                    <EmailSection email={user?.email || ''} />
                    <UserIdSection userId={user?.id || ''} />

                    <div className="pt-4">
                        <h3 className="mb-4 text-sm font-medium text-neutral-500 uppercase tracking-wider">
                            Danger Zone
                        </h3>
                        <div className="space-y-4">
                            <AccountCard
                                title="Sign out"
                                description="Sign out of your account session."
                                className="border-red-200 dark:border-red-900"
                                footer={
                                    <div className="flex items-center justify-end">
                                        <Button
                                            variant="outline"
                                            onClick={() => handleLogout(undefined)}
                                            disabled={isLoggingOut}
                                            className="w-full gap-3 border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 md:w-auto"
                                        >
                                            {isLoggingOut ? (
                                                <LoadingSpinner className="size-4" />
                                            ) : (
                                                <LogoutIcon className="size-4" />
                                            )}
                                            Sign out
                                        </Button>
                                    </div>
                                }
                            >
                                <></>
                            </AccountCard>
                            <DeleteAccountSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

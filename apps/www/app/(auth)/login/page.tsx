import type { Metadata } from 'next'
import Link from 'next/link'

import LoginCard from '@/components/auth/LoginCard'

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Log in to your Relay account to access real-time chat rooms and seamless communication.',
  keywords: ['login', 'chat', 'real-time', 'communication', 'relay'],
}

const ERROR_MESSAGES = {
  no_user_found: 'No user account was found. Please try logging in again.',
  something_went_wrong: 'Something went wrong. Please try again later.',
} as const

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { error } = (await searchParams) as { error?: string }

  const errorMessage = error
    ? ERROR_MESSAGES[error as keyof typeof ERROR_MESSAGES] ||
      'An error occurred. Please try again.'
    : undefined

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <div className="flex flex-1 items-center justify-center px-6">
        <LoginCard error={errorMessage} />
      </div>
    </div>
  )
}

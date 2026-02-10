import type { Metadata } from 'next'

import RegistryForm from '@/components/auth/RegistryForm'

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Create your Relay account to unlock personalized chat experiences and seamless communication.',
  keywords: ['register', 'signup', 'create account', 'chat', 'relay'],
}

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <div className="flex flex-1 items-center justify-center px-6">
        <RegistryForm />
      </div>
    </div>
  )
}

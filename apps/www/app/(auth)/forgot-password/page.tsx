import type { Metadata } from 'next'

import ForgetPassword from '@/components/auth/ForgetPassword'
import RelayLogo from '@/components/icons/animated/RelayLogo'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description:
    'Reset your Relay account password to regain access to your account.',
  keywords: ['forgot password', 'reset password', 'account recovery', 'relay'],
}

export default function ForgetPasswordPage() {
  return (
    <div className="gridGradient container h-screen w-screen">
      <div className="py-10">
        <RelayLogo />
      </div>
      <div className="flex-center w-full py-10">
        <ForgetPassword />
      </div>
    </div>
  )
}

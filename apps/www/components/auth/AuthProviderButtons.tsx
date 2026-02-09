'use client'

import { GoogleOAuthProvider } from '@react-oauth/google'

import { SocialAuthButtons } from './social-auth-buttons'

const AuthProviderButtons = ({ dark }: { dark?: boolean }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className="flex w-full flex-col gap-3">
        <SocialAuthButtons dark={dark} />
      </div>
    </GoogleOAuthProvider>
  )
}

export default AuthProviderButtons

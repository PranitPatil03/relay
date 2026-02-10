'use client'
import { signupSchema, type SignupInput } from '@relay/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthHeader } from '@/components/auth/auth-header'
import Input from '@/components/shared/Input'
import { useRegisterContext } from '@/context/RegistryContext'
import { SendVerificationOtpAction } from '@/lib/actions/authActions'
import { useAuthStore } from '@/lib/store/auth-store'

import { Button } from '../shared/Button'

import AuthProviderButtons from './AuthProviderButtons'

const SignupCard = () => {
  const { setStep, setEmail, setPassword, setFirstName, setLastName } =
    useRegisterContext()

  const { isAuthenticating, setIsAuthenticating } = useAuthStore()

  const form = useForm<Omit<SignupInput, 'code'>>({
    resolver: zodResolver(signupSchema.omit({ code: true })),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const { executeAsync, isExecuting } = useAction(SendVerificationOtpAction, {
    onSuccess: () => {
      setEmail(form.getValues('email'))
      setPassword(form.getValues('password'))
      setFirstName(form.getValues('firstName'))
      setLastName(form.getValues('lastName') ?? '')
      setStep('verify')
      toast.success('Verification email sent successfully')
      setIsAuthenticating(false)
    },
    onError: ({ error }) => {
      toast.error(error.serverError || 'An error occurred')
      setIsAuthenticating(false)
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    setIsAuthenticating(true)
    executeAsync({ email: data.email })
  })

  return (
    <div className="w-full max-w-[400px]">
      <AuthHeader
        title="Create an account on Relay"
        description="Please enter your details to sign up."
        dark
      />

      <div className="mt-8 space-y-6">
        <AuthProviderButtons dark />
        <div className="relative flex items-center">
          <div className="grow border-t border-white/10"></div>
          <span className="shrink px-3 text-xs text-neutral-500">
            OR
          </span>
          <div className="grow border-t border-white/10"></div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="flex space-x-3">
              <Input
                type="text"
                placeholder="First name"
                className="w-1/2 rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500"
                {...form.register('firstName')}
                error={form.formState.errors.firstName?.message}
                required
                dark
              />
              <Input
                type="text"
                placeholder="Last name"
                className="w-1/2 rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500"
                {...form.register('lastName')}
                error={form.formState.errors.lastName?.message}
                dark
              />
            </div>
            <Input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500"
              {...form.register('email')}
              error={form.formState.errors.email?.message}
              required
              dark
            />
            <Input
              type="password"
              placeholder="Create password"
              className="w-full rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500"
              {...form.register('password')}
              error={form.formState.errors.password?.message}
              required
              dark
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-lg bg-white py-3 font-semibold text-black transition-all hover:bg-neutral-200"
            disabled={isAuthenticating}
            isLoading={isExecuting}
          >
            Create account
          </Button>
        </form>
      </div>

      <p className="mt-8 text-center text-sm text-neutral-500">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-medium text-white underline underline-offset-2 transition-colors hover:text-neutral-300"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignupCard

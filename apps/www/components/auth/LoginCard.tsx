'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginInput } from '@relay/lib'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAction } from 'next-safe-action/hooks'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthHeader } from '@/components/auth/auth-header'
import Input from '@/components/shared/Input'
import { LoginAction } from '@/lib/actions/authActions'
import { useAuthStore } from '@/lib/store/auth-store'

import { Button } from '../shared/Button'

import AuthProviderButtons from './AuthProviderButtons'

interface LoginCardProps {
  error?: string
}

const LoginCard = ({ error }: LoginCardProps) => {
  const router = useRouter()

  const { isAuthenticating, setIsAuthenticating } = useAuthStore()

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { executeAsync, isExecuting } = useAction(LoginAction, {
    onSuccess: () => {
      toast.success('Logged in successfully')
      router.push('/dashboard')
      setIsAuthenticating(false)
    },
    onError: ({ error }) => {
      toast.error(error.serverError || 'Invalid credentials')
      setIsAuthenticating(false)
    },
  })

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        toast.error(error)
      }, 500)
    }
  }, [error])

  const onSubmit = form.handleSubmit((data) => {
    setIsAuthenticating(true)
    executeAsync(data)
  })

  return (
    <div className="w-full max-w-[400px]">
      <AuthHeader
        title="Welcome back to Relay"
        description="Please enter your details to sign in."
        dark
      />

      <div className="mt-8 space-y-6">
        <AuthProviderButtons dark />
        <div className="relative flex items-center">
          <div className="grow border-t border-white/10"></div>
          <span className="shrink px-3 text-xs text-neutral-500">OR</span>
          <div className="grow border-t border-white/10"></div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email..."
              className="w-full rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500"
              {...form.register('email')}
              error={form.formState.errors.email?.message}
              required
              dark
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500"
              {...form.register('password')}
              error={form.formState.errors.password?.message}
              required
              dark
            />
          </div>

          <div className="flex items-center justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-neutral-400 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full rounded-lg bg-white py-3 font-semibold text-black transition-all hover:bg-neutral-200"
            disabled={isAuthenticating}
            isLoading={isExecuting}
          >
            Sign in
          </Button>
        </form>
      </div>

      <p className="mt-8 text-center text-sm text-neutral-500">
        Don&apos;t have an account yet?{' '}
        <Link
          href="/register"
          className="font-medium text-white underline underline-offset-2 transition-colors hover:text-neutral-300"
        >
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default LoginCard

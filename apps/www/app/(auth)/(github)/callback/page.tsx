'use client'

import { Github } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAction } from 'next-safe-action/hooks'
import { Suspense, useEffect } from 'react'
import { toast } from 'sonner'

import { GithubAuthAction } from '@/lib/actions/authActions'

function GitHubCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const code = searchParams.get('code')

  const { execute } = useAction(GithubAuthAction, {
    onSuccess: (result) => {
      if (result.data?.success) {
        toast.success('Successfully authenticated with GitHub', {
          id: 'github-auth',
        })
        router.push('/dashboard')
      } else {
        toast.error('Authentication failed', { id: 'github-auth' })
        router.push('/login')
      }
    },
    onError: ({ error }) => {
      toast.error(error.serverError || 'Authentication failed', {
        id: 'github-auth',
      })
      router.push('/login')
    },
  })

  useEffect(() => {
    if (error) {
      toast.error('GitHub authentication failed')
      router.push('/login')
      return
    }

    if (!code) {
      toast.error('No authorization code received from GitHub')
      router.push('/login')
      return
    }

    const toastId = 'github-auth'
    toast.loading('Authenticating with GitHub...', { id: toastId })

    execute({ code })
  }, [error, code, router, execute])

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <Github className="size-12 animate-pulse text-foreground" />
        <div className="space-y-1">
          <div className="text-lg font-medium text-foreground">
            Authenticating with GitHub...
          </div>
          <div className="text-sm text-muted-foreground">
            Please wait while we complete the process
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GitHubCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-4 text-center">
            <Github className="size-12 animate-pulse text-foreground" />
            <div className="text-lg font-medium text-foreground">
              Loading...
            </div>
          </div>
        </div>
      }
    >
      <GitHubCallbackContent />
    </Suspense>
  )
}

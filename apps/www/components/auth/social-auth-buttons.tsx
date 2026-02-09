import { GitHubAuthButton } from './GitHubAuthButton'
import { GoogleAuthButton } from './GoogleAuthButton'

export function SocialAuthButtons({ dark }: { dark?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <GoogleAuthButton dark={dark} />
      <GitHubAuthButton dark={dark} />
    </div>
  )
}

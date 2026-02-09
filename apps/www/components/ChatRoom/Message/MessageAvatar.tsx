import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@echo/ui/components/ui/avatar.tsx'
import { User } from 'lucide-react'

type MessageAvatarProps = {
  avatar: string
  userName: string
  showAvatar: boolean
}

export const MessageAvatar = ({
  avatar,
  userName,
  showAvatar,
}: MessageAvatarProps) => {
  if (!showAvatar) {
    return <div className="size-8 md:size-8" />
  }

  return (
    <Avatar className="size-8">
      {avatar ? (
        <AvatarImage src={avatar} alt={`${userName}'s avatar`} />
      ) : null}
      <AvatarFallback className="bg-neutral-200">
        <User className="size-4 md:size-5" />
      </AvatarFallback>
    </Avatar>
  )
}

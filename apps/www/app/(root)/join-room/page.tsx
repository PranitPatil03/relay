import RelayLogo from '@/components/icons/animated/RelayLogo'
import { JoinRoomForm } from '@/components/Join-Room/JoinRoomForm'

export const metadata = {
  title: 'Join Room',
  description: 'Join an existing chat room',
}

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ roomId: string; anonymous: string }>
}) => {
  const { roomId, anonymous } = await searchParams
  return (
    <div className="flex h-screen flex-col items-center gap-6 bg-white">
      <div className="my-14">
      </div>
      <div className="flex flex-col items-center rounded-2xl bg-white p-10">
        <JoinRoomForm anonymous={anonymous == 'true'} roomId={roomId} />
      </div>
    </div>
  )
}

export default Page

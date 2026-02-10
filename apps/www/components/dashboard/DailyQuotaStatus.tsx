import { UserStats } from '@/types'

export default function DailyQuotaStatus({ stats }: { stats: UserStats }) {
    const roomsCreatedToday = stats.roomsCreatedToday ?? 0
    const maxRoomsPerDay = stats.limits?.maxRoomsPerDay ?? 10
    const remaining = maxRoomsPerDay - roomsCreatedToday
    const percentage = (roomsCreatedToday / maxRoomsPerDay) * 100
    const isExhausted = remaining <= 0
    const isLow = remaining <= 2 && remaining > 0

    return (
        <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
                <div className="h-1.5 w-24 rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ease-out ${isExhausted
                                ? 'bg-red-500'
                                : isLow
                                    ? 'bg-amber-500'
                                    : 'bg-emerald-500'
                            }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                </div>
                <span
                    className={`text-xs font-medium whitespace-nowrap ${isExhausted
                            ? 'text-red-600'
                            : isLow
                                ? 'text-amber-600'
                                : 'text-gray-500'
                        }`}
                >
                    {roomsCreatedToday}/{maxRoomsPerDay} rooms today
                </span>
            </div>
        </div>
    )
}

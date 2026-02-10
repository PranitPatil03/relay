import { Request, Response } from 'express'
import client from '@relay/db/src'
import { updateProfileSchema } from '@relay/lib'

const DAILY_ROOM_LIMIT = 10
const MAX_ROOM_DURATION = 30 // minutes

export const getStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const [stats, roomsCreatedToday] = await Promise.all([
      client.user.findUnique({
        where: { id: req.user!.userId },
        select: {
          savedRoomsCount: true,
          roomsCount: true,
        },
      }),
      client.room.count({
        where: {
          createdById: req.user!.userId,
          createdAt: { gte: today },
        },
      }),
    ])

    if (!stats) {
      res.status(404).json({ message: 'User stats not found' })
      return
    }

    res.json({
      totalRooms: stats.roomsCount,
      savedRooms: stats.savedRoomsCount,
      temporaryRooms: stats.roomsCount - stats.savedRoomsCount,
      roomsCreatedToday,
      limits: {
        maxRoomsPerDay: DAILY_ROOM_LIMIT,
        maxTimeLimit: MAX_ROOM_DURATION,
        maxUsers: 50,
      },
    })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user stats' })
  }
}
export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = updateProfileSchema.safeParse(req.body)

    if (!result.success) {
      res.status(400).json({
        message: 'Invalid input',
        errors: result.error.errors,
      })
      return
    }

    const { name, image } = result.data

    const updateData: { name?: string; image?: string } = {}
    if (name) updateData.name = name
    if (image) updateData.image = image

    const updatedUser = await client.user.update({
      where: { id: req.user!.userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        image: true,
      },
    })
    res.json(updatedUser)
  } catch (error) {
    console.error('Error updating profile:', error)
    res.status(500).json({ message: 'Failed to update profile' })
  }
}
export const deleteAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user!.userId

    await client.user.delete({
      where: { id: userId },
    })
    res.status(200).json({ message: 'Account deleted successfully' })
  } catch (error) {
    console.error('Error deleting account:', error)
    res.status(500).json({ message: 'Failed to delete account' })
  }
}

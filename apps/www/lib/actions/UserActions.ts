'use server'

import { updateProfileSchema } from '@relay/lib'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { UserStats } from '@/types'

import { actionClient } from './safe-actions'

export async function getUserStats() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  if (!token) {
    redirect('/login')
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_BASE_URL}/api/v1/user/stats`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
        next: {
          tags: ['user-stats'],
        },
      }
    )

    if (response.status === 401) {
      redirect('/login')
    }

    if (!response.ok) {
      throw new Error('Failed to fetch user stats')
    }

    const data: UserStats = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching user stats:', error)
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error
    }
    throw error
  }
}

export const updateProfile = actionClient
  .schema(updateProfileSchema)
  .action(async (input) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')
    if (!token) {
      throw new Error('Not authenticated')
    }
    // console.log(input) removed

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_BASE_URL}/api/v1/user/profile`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...input.parsedInput,
          }),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to update profile')
      }
      revalidateTag('user')
      return response.json()
    } catch (error) {
      console.error('Error updating profile:', error)
      throw error
    }
  })
export const deleteAccount = actionClient.action(async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  if (!token) {
    throw new Error('Not authenticated')
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_BASE_URL}/api/v1/user/account`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to delete account')
    }

    // Remove all cookies
    const allCookies = cookieStore.getAll()
    for (const cookie of allCookies) {
      cookieStore.delete(cookie.name)
    }

    return { success: true }
  } catch (error) {
    console.error('Error deleting account:', error)
    throw error
  }
})

import { PrismaClient } from '../generated/client'

const prisma = new PrismaClient()

async function main() {
  // Create Free Plan with strict limits
  const freePlan = await prisma.plan.upsert({
    where: { id: 'free282003' },
    update: {
      maxUsers: 5,        // Max 5 users per room
      maxTimeLimit: 30,   // Max 30 minutes per session
      maxRooms: 3,        // Max 3 total rooms
      maxSavedRooms: 1,   // Max 1 saved room
    },
    create: {
      id: 'free282003',
      name: 'Free',
      maxUsers: 5,        // Max 5 users per room
      maxTimeLimit: 30,   // Max 30 minutes per session
      maxRooms: 3,        // Max 3 total rooms
      maxSavedRooms: 1,   // Max 1 saved room
      isActive: true,
      price: 0,
    },
  })

  console.log('Seeded free plan with strict limits:', freePlan)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

import { Gender, MaritalStatus, PrismaClient, Race, Title } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.member.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      name: 'John Connors',
      title: Title.Dr,
      policyId: '',
      idNumber: '54-5645453Y12',
      insurerId: '',
      firstName: 'John',
      lastName: 'Connors',
      email: 'alice@prisma.io',
      address: '',
      dob: '',
      gender: Gender.Female,
      race: Race.Black,
      maritalStatus: MaritalStatus.Single,
    },
  })

  const bob = await prisma.member.upsert({
    where: { email: 'sam@prisma.io' },
    update: {},
    create: {
      name: 'John Connors',
      title: Title.Dr,
      policyId: '',
      idNumber: '54-5645453Y12',
      insurerId: '',
      firstName: 'John',
      lastName: 'Connors',
      email: 'sam@prisma.io',
      address: '',
      dob: '',
      gender: Gender.Female,
      race: Race.Black,
      maritalStatus: MaritalStatus.Single,
    },
  })
  console.log({ alice, bob })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

import type { Member } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import { defineStore } from 'pinia'

const prisma = new PrismaClient()
export const useMemberStore = defineStore('memberStore', {
  state: () => {
    return {
      members: [] as Member[],
    }
  },
  actions: {
    async getMembers() {
      const allMembers = await prisma.member.findMany()
      this.members = allMembers
    },
  },
},
)


import { defineStore } from 'pinia'
import type Member from '../interfaces/Member'
import memberData from '../data/members.json'

export const useMemberStore = defineStore('memberStore', {
  state: () => {
    return {
      members: [] as Member[],
      currentMember: {} as Member,
    }
  },
  getters: {
    getCurrentMember(state) {
      return state.currentMember
    },
  },
  actions: {
    getMembers() {
      return this.members = memberData
    },
    getMemberById(id: string): Member {
      this.getMembers()
      return this.members.find(x => x.id === id) || {} as Member
    },
    setCurrentMember(id: string) {
      this.currentMember = this.getMemberById(id)
      return this.currentMember
    },
  },
},
)


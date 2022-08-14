import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => {
    return {
      assessmentFormStep: 0,
    }
  },
  actions: {
    increaseStep() {
      this.assessmentFormStep++
    },
    decreaseStep() {
      this.assessmentFormStep--
    },
  },
},
)


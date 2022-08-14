import { defineStore } from 'pinia'
import type Assessment from '../interfaces/Assessment'
import assessmentData from '../data/assessments.json'

export const useAssessmentStore = defineStore('assessmentStore', {
  state: () => {
    return {
      assessments: [] as Assessment[],
      recentAssessments: [] as Assessment[],
      currentAssessmentName: '',
      currentAssessment: {} as Assessment,
      lastAssessment: {} as Assessment,
    }
  },
  getters: {
    getLastAssessment(state) {
      return state.lastAssessment
    },
    getCurrentAssessment(state) {
      return state.currentAssessment
    },
    getLastBMI(state) {
      return (state.lastAssessment.weight / (state.lastAssessment.height / 100) ** 2)
    },

    getLastHW(state) {
      return (state.lastAssessment.waist / state.lastAssessment.hips)
    },
  },
  actions: {
    getAssessments() {
      return this.assessments = assessmentData
    },
    getAssessmentById(id: string): Assessment {
      this.getAssessments()
      return this.assessments.find(x => x.id === id) || {} as Assessment
    },
    getAssessmentsByMemberId(memberId: string): Assessment[] {
      this.getAssessments()
      return this.assessments.filter(x => x.memberId === memberId)
    },
    getLastAssessmentByMemberId(memberId: string): Assessment {
      const c = this.getAssessmentsByMemberId(memberId)
      this.lastAssessment = this.getAssessmentsByMemberId(memberId)[0]
    },
    setCurrentAssessment(id: string) {
      this.currentAssessment = this.getAssessmentById(id)
      return this.currentAssessment
    },
    setLastAssessment(assessment: Assessment) {
      this.lastAssessment = assessment
    },

    setCurrentAssessmentName(assessment: Assessment) {
      this.lastAssessment = assessment
    },

    async postAssessment(assessment: Assessment) {
      this.assessments.push(assessment)

      // AssessmentDataService.create(assessment)
      // .then((response: ResponseData) => {
      //   // assessment.id = response.data.id;
      //   this.setLastAssessment(response.data)
      //   console.log(this.lastAssessment)
      //   // this.submitted = true;
      // })
      // .catch((e: Error) => {
      //   console.log(e);
      // });
    },
  },

})


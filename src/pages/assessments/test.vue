<!-- eslint-disable vue/html-quotes -->
<script lang="ts" setup>
import { ref } from 'vue'
import { useMemberStore } from '../../store/member.store'
import BehaviouralAssessment1 from '../../components/tests/BehaviouralAssessment.vue'
import { useAssessmentStore } from '~/store/assessment.store'
import BiologicalAssessment1 from '~/components/tests/BiologicalAssessment.vue'
import { useFormStore } from '~/store/form.store'
import BiometricAssessment1 from '~/components/tests/BiometricAssessment.vue'
import AssessmentConfirm1 from '~/components/tests/AssessmentConfirm.vue'
import AssessmentResults1 from '~/components/tests/AssessmentResults.vue'

const memberStore = useMemberStore()
const assessmentStore = useAssessmentStore()
const formStore = useFormStore()

const step = ref(formStore.assessmentFormStep)

const assessments = assessmentStore.getAssessments()

const percentage = ref(40)
const width = ref(10)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const visible = ref(false)

const members = memberStore.getMembers()
const value = ref([])
const currentMember = ref(memberStore.currentMember)
interface ListItem {
  value: string
  label: string
}

// const statess = members.map(item): ListItem => {
// `${x.firstName} ${x.lastName} - #${x.memberId}`
// return { id: 1,value: item, label: item }
// }
// console.log(statess)

const list = members.map((x): ListItem => {
  return { value: x.id, label: `${x.firstName} ${x.lastName} - #${x.memberId}` }
})

const options = ref<ListItem[]>([])
const num = ref('')
const loading = ref(false)

const changeSelect = () => {
  memberStore.setCurrentMember(value.value[0])
  assessmentStore.getLastAssessmentByMemberId(value.value[0])
}
const remoteMethod = (query: string) => {
  if (query !== '') {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  }
  else {
    options.value = []
  }
}
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div flex flex-col items-center>
          <p text-lg>
            {{ `${memberStore.currentMember.firstName} ${memberStore.currentMember.lastName}` }}
          </p>
          <p text-sm uppercase text-gray-500>
            56 years old
          </p>
        </div>
      </template>
      <div text-center>
        <BiologicalAssessment1 />
        <!-- <BiometricAssessment1 v-if="formStore.assessmentFormStep === 1" />
        <BehaviouralAssessment1 v-if="formStore.assessmentFormStep === 2" />
        <AssessmentConfirm1 v-if="formStore.assessmentFormStep === 3" />
        <AssessmentResults1 v-if="formStore.assessmentFormStep === 4" /> -->
      </div>
    </el-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

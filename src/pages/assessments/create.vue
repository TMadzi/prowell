<!-- eslint-disable vue/html-quotes -->
<script lang="ts" setup>
import { ref } from 'vue'
import { useMemberStore } from '../../store/member.store'
import { useAssessmentStore } from '~/store/assessment.store'

const memberStore = useMemberStore()
const assessmentStore = useAssessmentStore()

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
    <el-select-v2
      v-model="value"
      w-full
      filterable
      remote
      :remote-method="remoteMethod"
      clearable
      :options="options"
      :loading="loading"
      placeholder="Please enter a keyword"
      @change="changeSelect"
    />
    <section v-if="value.length > 0" mt-8>
      <el-card class="box-card">
        <template #header>
          <div flex flex-col items-center>
            <p text-lg>
              {{ `${memberStore.currentMember.firstName} ${memberStore.currentMember.lastName}` }}
            </p>
            <p text-sm uppercase text-gray-500>
              56 years old
            </p>
            <button class="mt-4 border-2 border-emerald-800 px-4 py-2 text-emerald-800" @click="visible = true">
              New Assessment
            </button>
          </div>
        </template>
        <div text-center>
          <el-progress type="dashboard" :stroke-width="width" :width="parseInt('200')" :percentage="percentage" :color="colors">
            <template #default="{ percentage }">
              <span my-8 text-2xl font-bold>{{ assessmentStore.lastAssessment.wellnessScore }}</span>
              <span block text-sm uppercase mt-4>Wellness Score</span>
            </template>
          </el-progress>
        </div>
      </el-card>
    </section>
    <el-dialog v-model="visible" :show-close="false">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" text-sm>
            {{ `Begin assessment for ${memberStore.currentMember.firstName}` }}
          </h4>
          <div mt-4 flex space-between>
            <router-link to="/assessments/test" type="success" @click="close">
              Begin
            </router-link>

            <el-button type="danger" @click="close">
              Close
            </el-button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

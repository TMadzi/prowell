<script setup lang="ts">
import AssessmentDataService from '../..//services/AssessmentDataService'
import ResponseData from '../../types/ResponseData'
import { useAssessmentStore } from '~/store/assessment.store'
import { useFormStore } from '~/store/form.store'
import type Assessment from '~/interfaces/Assessment'

const formStore = useFormStore()
const assessmentStore = useAssessmentStore()

interface SummaryField {
  name: string
  value: string
  unit: string
}

const store = useAssessmentStore()
const member = useMemberStore()

const saveAssessment = () => {
  assessmentStore.currentAssessment.createdAt = 'exercise.value'
  assessmentStore.currentAssessment.behaviourScore = ''
  store.postAssessment(assessmentStore.currentAssessment)
    .then(() => formStore.increaseStep())
}

const fields = reactive([] as Array<SummaryField>)

fields.push(
  {
    name: 'Name',
    value: `${member.currentMember.firstName} ${member.currentMember.lastName}`,
    unit: '',
  },
  {
    name: 'Gender',
    value: member.currentMember.gender,
    unit: '',
  },
  {
    name: 'Age',
    // value: member.currentMember.dob.toString(),
    value: '56',
    unit: 'years old',
  },
  {
    name: 'Height',
    value: store.currentAssessment.height.toString(),
    unit: 'cm',
  },
  {
    name: 'Weight',
    value: store.currentAssessment.weight.toString(),
    unit: 'kg',
  },
  {
    name: 'Waist',
    value: store.currentAssessment.waist.toString(),
    unit: 'cm',
  },
  {
    name: 'Hips',
    value: store.currentAssessment.hips.toString(),
    unit: 'cm',
  },
  {
    name: 'Sys Bp',
    value: store.currentAssessment.systolic.toString(),
    unit: '',
  },
  {
    name: 'Dia BP',
    value: store.currentAssessment.diastolic.toString(),
    unit: '',
  },
  {
    name: 'Blood Sugar',
    value: store.currentAssessment.bloodSugar.toString(),
    unit: '',
  },
  {
    name: 'Chlolesterol',
    value: store.currentAssessment.cholesterol.toString(),
    unit: '',
  },
  {
    name: 'Exercise',
    value: store.currentAssessment.weeklyExercise.toString(),
    unit: 'minutes a week',
  },
  {
    name: 'Drinking',
    value: store.currentAssessment.weeklyAlcohol.toString(),
    unit: 'times a week',
  },
  {
    name: 'Smoking',
    value: store.currentAssessment.weeklyCigarettes.toString(),
    unit: 'times a week',
  },
)
</script>

<template>
  <div class="bg-whiteFade px-6  pt-2 pb-12">
    <header class="abolute top-0 w-full flex flex-col">
      <h2 class="text-3xl text-text tracking-wider ">
        Confirm Details
      </h2>
      <div class="w-12 mt-2 bg-gradient-to-r from-primary via-primary to-primaryAccent h-1" />
    </header>
    <!-- Search Member -->
    <p class=" mb-6 text-text tracking-wider">
      Please comfirm details before processing
    </p>
    <div
      v-for="field in fields"
      :key="field.name"
      class="grid grid-cols-12 gap-4  w-full text-text tracking-wider my-4 border-b border-light-700 py-2"
    >
      <div class="col-span-5">
        <span class="uppercase text-sm">{{ field.name }}: </span>
      </div>
      <div class="col-span-7">
        <span class="font-bold text capitalize">{{ field.value }} </span><span class="uppercase text-xs"> {{ ` ${field.unit}` }}</span>
      </div>
    </div>
    <div class="flex gap-4">
      <button class="text-center flex justify-between mt-16 w-48 text-center tracking-wider bg-whiteFade text-primary border-2 border-primary px-8 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round @click="goBack()">
        <font-awesome-icon class="group-hover:text-primary text-2xl self-end text-primary" icon="arrow-left" />
        BACK
      </button>
      <button class="text-center flex justify-between mt-16 w-48 text-center tracking-wider bg-primary text-whiteFade border-2 border-primary pl-4 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round @click="saveAssessment()">
        PROCESS
        <font-awesome-icon class="group-hover:text-primary mx-2 text-2xl self-end text-white" icon="arrow-right" />
      </button>
    </div>
  </div>
</template>

<style>

</style>

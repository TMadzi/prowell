<script setup lang="ts">
import { useAssessmentStore } from '~/store/assessment.store'
import { useFormStore } from '~/store/form.store'

const assessmentStore = useAssessmentStore()
const memberStore = useMemberStore()
const formStore = useFormStore()

const sys = ref()
const dia = ref()
const glu = ref()
const chlo = ref()

const handleClick = () => {
  assessmentStore.currentAssessment.systolic = sys.value
  assessmentStore.currentAssessment.diastolic = dia.value
  assessmentStore.currentAssessment.bloodSugar = glu.value
  assessmentStore.currentAssessment.cholesterol = chlo.value
  formStore.increaseStep()
}
const goBack = async () => {
  formStore.decreaseStep()
}
</script>

<template>
  <div class="bg-whiteFade px-6 pt-2 pb-12">
    <header class="abolute top-0 w-full flex flex-col">
      <h2 class="text-2xl text-text leading-relaxed tracking-wider ">
        Biometric Assessment
      </h2>
      <div w-12 bg-gradient-to-r from-primary via-primary to-primaryAccent h-1 />
    </header>
    <p class="mt-2 text-gray-400 mb-6 text-text tracking-wider">
      Please complete all of the fields.
    </p>
    <!-- Form -->
    <el-form ref="form" class="space-y-4" label-width="120px">
      <div class="flex group">
        <input v-model="sys" class="w-full tracking-wider bg-white border-b-2 border-text hover:border-primary focus:border-primary text-text placeholder-dark-100 py-3 px-6 transition duration-500 ease-linear focus-visible:outline-none p-1 " placeholder="Systolic BP" type="number">
      </div>

      <div class="flex group">
        <input v-model="dia" class="w-full  group tracking-wider bg-white border-b-2 border-text hover:border-primary  text-text placeholder-dark-100 py-3 px-6 transition duration-500 ease-linear focus-visible:outline-none p-1 " placeholder="Diastolic BP" type="number">
      </div>
      <div class="flex group">
        <input v-model="glu" class="w-full tracking-wider bg-white border-b-2 border-text hover:border-primary focus:border-primary text-text placeholder-dark-100 py-3 px-6 transition duration-500 ease-linear focus-visible:outline-none p-1 " placeholder="Blood Sugar" type="number">
      </div>
      <div class="flex group">
        <input v-model="chlo" class="w-full tracking-wider bg-white border-b-2 border-text hover:border-primary focus:border-primary text-text placeholder-dark-100 py-3 px-6 transition duration-500 ease-linear focus-visible:outline-none p-1 " placeholder="Chlolesterol" type="number">
      </div>
      <!-- Buttons -->
    </el-form>
    <div class="flex gap-4">
      <button class="text-center flex justify-between mt-16 w-48 text-center tracking-wider bg-whiteFade text-primary border-2 border-primary px-8 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round @click="goBack()">
        <!-- <font-awesome-icon class="group-hover:text-primary text-2xl self-end text-primary" icon="arrow-left" /> -->
        BACK
      </button>
      <button class="text-center flex justify-between mt-16 w-48 text-center tracking-wider bg-primary text-whiteFade border-2 border-primary px-8 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round @click="handleClick()">
        NEXT
        <!-- <font-awesome-icon class="group-hover:text-primary text-2xl self-end text-white" icon="arrow-right" /> -->
      </button>
    </div>
  </div>
</template>

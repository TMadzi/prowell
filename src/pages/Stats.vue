<script setup lang="ts">
interface SummaryField {
  name: string
  value: string
  unit: string
}

const assessmentStore = useAssessmentStore()
const fields = reactive([] as Array<SummaryField>)

assessmentStore.getAssessments()

fields.push(
  {
    name: 'Assessments',
    value: assessmentStore.assessments.length.toString(),
    unit: '',
  },
  {
    name: 'Avg. Age',
    value: '37.2',
    unit: '',
  },
  {
    name: 'Avg. BMI',
    value: '34.4',
    unit: '',
  },
  {
    name: 'Age',
    value: '',
    unit: 'years old',
  },
)
</script>

<template>
  <div class="bg-whiteFade mt-20 px-6 pt-2 pb-12">
    <header class="abolute top-0 w-full flex flex-col">
      <h2 class="text-2xl text-text leading-relaxed tracking-wider ">
        Statistics
      </h2>
      <div class="w-12 mt-2 bg-gradient-to-r from-primary via-primary to-primaryAccent h-1" />
    </header>
    <p class="mt-6 mb-6 text-text tracking-wider">
      Statistics of your assessments
    </p>
    <div
      v-for="field in fields"
      :key="field.name"
      class="grid grid-cols-12 gap-4 text-text tracking-wider my-2 border-b border-light-700 py-2"
    >
      <div class="col-span-6">
        <span class="uppercase text-sm">{{ field.name }}: </span>
      </div>
      <div class="col-span-6">
        <span class="font-bold text capitalize">{{ field.value }} </span><span class="uppercase text-xs"> {{ ` ${field.unit}` }}</span>
      </div>
    </div>
    <router-link to="/" class=" text-center flex mx-auto justify-center mt-12 w-48 text-center tracking-wider bg-primary text-whiteFade border-2 border-primary px-8 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round>
      <font-awesome-icon class="group-hover:text-primary text-2xl self-end text-whiteFade mr-2" icon="arrow-left" />
      BACK
    </router-link>
  </div>
</template>

<style>

</style>

<route lang="yaml">
meta:
  layout: home
</route>

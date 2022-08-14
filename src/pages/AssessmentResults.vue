<template>
  <div class="bg-whiteFade mt-20 px-6 pt-2 pb-12">
    <header class="abolute top-0 w-full flex flex-col">
      <h2 class="text-3xl text-text tracking-wider ">Results</h2>
      <div class="w-12 mt-2 bg-gradient-to-r from-primary via-primary to-primaryAccent h-1"></div>
    </header>
    <!-- Search Member -->
    <p class="mt-6 mb-6 text-text tracking-wider">
      Please discuss these with {{patientName}}
    </p>
    <div class="flex mb-8">
      <div  :class="gradeColor" class=" group flex flex-col gap-2 flex-1 rounded-full border-5 w-32 h-32 p-4 items-center">
        <p class="uppercase font-bold tracking-wider">Wellness Score</p>
        <p class="uppercase text-5xl font-bold tracking-wider">{{score}}-<span>{{behaviour}}</span></p>
      </div>
    </div>
    <el-tabs type="border-card" stretch>
    <el-tab-pane>
    <template #label>
      <span><i class="el-icon-date"></i> Summary</span>
    </template>
    <div
      class="grid grid-cols-12 gap-4 text-text tracking-wider my-4 border-b border-light-700 py-2"
      v-for="field in fields"
      :key="field.name"
      :v-model="fields"
    >
      <div class="col-span-4"><span class="uppercase text-xs">{{field.name}}: </span></div>
      <div class="col-span-4 text-center"><span class="font-bold text">{{field.value}} </span><span class="uppercase text-xs"> {{" "+ field.unit}}</span></div>
      <div class="col-span-4 text-right"><span :class="field.rating" class="font-bold text uppercase">{{field.rating.split("-")[1]}} </span></div>
    </div>
  </el-tab-pane>
  <el-tab-pane label="Notes">
    <ul class="p-4">
      <li class="text-text tracking-wider list-circle pb-2" v-for="(note) in notes" :key="note">{{note.toString()}}</li>
    </ul>
  </el-tab-pane>
  <el-tab-pane label="Warnings">This will show all the measurements that have been flagged</el-tab-pane>
</el-tabs>
    <router-link to="/" class="text-center flex justify-between mt-12 w-48 text-center tracking-wider bg-primary text-whiteFade border-2 border-primary px-8 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round>
      Finish
      <font-awesome-icon class="group-hover:text-primary text-2xl self-end text-white"  icon="arrow-right" />
    </router-link>
  </div>
</template>

<script lang="ts">
  import { faStoreSlash } from "@fortawesome/free-solid-svg-icons"
import { computed, defineComponent, onMounted, reactive, ref } from "vue"
import { Grader } from "../../helpers/grader"
  import {useAssessment}  from '../../store/assessments'
  import { useMember }  from '../../store/memberStore'


  interface SummaryField {
    name: string,
    value: string,
    unit: string,
    rating: string,
  }

  export default defineComponent({
    setup() {
      const store = useAssessment() 
      const member = useMember()
      const score = store.lastAssessment.wellnessScore
      const grader = new Grader()
      const behaviour = store.lastAssessment.behaviourScore
      const fields = reactive([] as Array<SummaryField>)
      const patientName = member.currentMemberDetails.firstName
      const gradeColor = grader.gradeWellness(score)
      const notes = store.lastAssessment.notes

      fields.push(
        {
        name: "BMI",
        value: store.getLastBMI.toString().slice(0, 4),
        unit: "",
        rating: grader.gradeBMI(store.getLastBMI)
        },
        {
        name: "H/W Ratio",
        value: store.getLastHW.toString().slice(0,4),
        unit: "",
        rating: grader.gradeHW(store.getLastHW, 'male')
        },
        {
        name: "Sys Bp",
        value: store.lastAssessment.systolic.toString(),
        unit: "",
        rating: grader.gradeSystolic(store.lastAssessment.systolic)
        },
        {
        name: "Dia BP",
        value: store.lastAssessment.distolic.toString(),
        unit: "",
        rating: grader.gradeDiastolic(store.lastAssessment.distolic)
        },
        {
        name: "Blood Sugar",
        value: store.lastAssessment.bloodSugar.toString(),
        unit: "",
        rating:  grader.gradeGlucose(store.lastAssessment.bloodSugar)
        },
        {
        name: "Chlolesterol",
        value: store.lastAssessment.cholesterol.toString(),
        unit: "",
        rating:  grader.gradeChlo(store.lastAssessment.cholesterol)
        },
      )
      
        return {
          fields,
          patientName,
          score,
          behaviour,
          grader,
          gradeColor,
          notes
        }

    }
  })
</script>

<style>

</style>
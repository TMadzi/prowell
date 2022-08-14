<script setup lang="ts">
import GlassCard1 from '~/components/ui/GlassCard.vue'
</script>

<template>
  <div>
    <GlassCard1 title="Stats">
      <div flex flex-col items-start justify-center gap-4 mt-6>
        <div flex items-center w-full justify-start>
          <div bg-white shadow-sm text-yellow-500 text-opacity-60 flex items-center justify-start rounded-full w-full px-4 py-2>
            <div font-bold text-xl i-healthicons-health-data-sync />
            <span text-2xl font-bold mx-4>249</span>
            <div text-xs text-center flex flex-1 flex-col uppercase font-semibold>
              <p>Assessments</p>
              <p>Completed</p>
            </div>
          </div>
        </div>
        <div flex items-center w-full justify-start>
          <div bg-white shadow-sm text-blue-400 text-opacity-80 flex items-center justify-start rounded-full w-full px-4 py-2>
            <div font-bold text-xl i-arcticons-heartbeat />
            <span text-2xl font-bold mx-4>24.45</span>
            <div text-xs text-center flex flex-1 flex-col uppercase font-semibold>
              <p>Average</p>
              <p>age</p>
            </div>
          </div>
        </div>
        <div flex items-center w-full justify-start>
          <div bg-white shadow-sm text-pink-400 text-opacity-80 flex items-center justify-start rounded-full w-full px-4 py-2>
            <div font-bold text-xl i-arcticons-openscale />
            <span text-2xl font-bold mx-4>28.2</span>
            <div text-xs text-center flex flex-1 flex-col uppercase font-semibold>
              <p>Average</p>
              <p>BMI</p>
            </div>
          </div>
        </div>
        <div flex items-center w-full justify-start>
          <div bg-white shadow-sm flex items-center justify-start rounded-full w-full px-4 py-2>
            <div font-bold text-green-600 text-opacity-80 text-xl i-arcticons-healthelife />
            <span text-2xl font-bold mx-4 text-green-600 text-opacity-80>823</span>
            <div text-xs text-center text-green-600 text-opacity-70 flex flex-1 flex-col uppercase font-semibold>
              <p>Average</p>
              <p>Wellness Score</p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard1>
    <section grid grid-cols-12 mt-8 gap-y-8 gap-x-4 w-full>
      <router-link to="/assessments/create" col-span-6 flex text-slate-800 text-opacity-60 hover:cursor-pointer hover:shadow-lg>
        <GlassCard1 flex-col items-center justify-center>
          <h5 text-xs>
            New
          </h5>
          <div font-bold text-4xl i-arcticons-acalendar-plus />
          <h5 text-xs>
            Assessment
          </h5>
        </GlassCard1>
      </router-link>
      <router-link to="/stats" col-span-6 flex text-slate-800 text-opacity-60 hover:cursor-pointer hover:shadow-lg>
        <GlassCard1 col-span-6>
          <div flex flex-col items-center justify-center text-slate-800 text-opacity-60>
            <h5 text-xs>
              Recent
            </h5>
            <div font-bold text-4xl i-arcticons-myapplist />
            <h5 text-xs>
              Assessments
            </h5>
          </div>
        </GlassCard1>
      </router-link>
      <router-link to="/stats" col-span-6 flex text-slate-800 text-opacity-60 hover:cursor-pointer hover:shadow-lg>
        <GlassCard1 col-span-6>
          <div flex flex-col items-center justify-center text-slate-800 text-opacity-60>
            <h5 text-xs>
              View
            </h5>
            <div font-bold text-4xl i-arcticons-smartnews />
            <h5 text-xs>
              Stats
            </h5>
          </div>
        </GlassCard1>
      </router-link>
      <router-link to="/learn" col-span-6 flex text-slate-800 text-opacity-60 hover:cursor-pointer hover:shadow-lg>
        <GlassCard1 col-span-6>
          <div flex flex-col items-center justify-center text-slate-800 text-opacity-60>
            <h5 text-xs>
              Learn
            </h5>
            <div font-bold text-4xl i-arcticons-bookcatalogue />
            <h5 text-xs>
              More
            </h5>
          </div>
        </GlassCard1>
      </router-link>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
import GlassCard1 from '~/components/ui/GlassCard.vue'
</script>

<template>
  <div>
    <p text-black>
      <GlassCard1 title="Hi Tendai">
        <div flex flex-col items-start justify-center gap-4 mt-6>
          <div flex items-center w-full justify-start>
            <div bg-white shadow-sm text-yellow-500 text-opacity-60 flex items-center justify-start rounded-full w-full px-4 py-2>
              <div font-bold text-xl i-healthicons-health-data-security />
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
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

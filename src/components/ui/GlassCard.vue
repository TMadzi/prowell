<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div w-full flex flex-col h-auto rounded-xl bg-white bg-opacity-30 p-4>
    <h2 text-2xl font-bold text-slate-800>
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

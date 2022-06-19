<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div w-full flex items-center justify-between h-16 absolute top-0 left-0 bg-transparent bg-opacity-30 p-4 px-8>
    <div text-2xl font-bold text-slate-800 i-ci-menu-alt-05 />
    <el-avatar size="default">
      u
    </el-avatar>

    <slot />
  </div>
</template>

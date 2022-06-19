<script setup lang="ts">
import TopBar from '~/components/nav/TopBar.vue'
const img = 'https://res.cloudinary.com/defmmlrqg/image/upload/e_blur:273,o_13/v1655627649/Pro%20Wellness/login-tree_guim4t.jpg'
</script>

<template>
  <main class="px-8 py-6  bg-cover  h-screen text-gray-700 " :style="{ background: `url(${img})` }">
    <TopBar />
    <RouterView mt-16 />
  </main>
</template>


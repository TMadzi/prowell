<script setup lang="ts">
const img = 'https://res.cloudinary.com/defmmlrqg/image/upload/e_blur:273,o_13/v1655627649/Pro%20Wellness/login-tree_guim4t.jpg'
</script>

<template>
  <main class="px-8 py-10 bg-cover  h-screen text-gray-700 " :style="{ background: `url(${img})` }">
    <RouterView />
  </main>
</template>


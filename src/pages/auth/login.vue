<script setup lang="ts">
const img = 'https://res.cloudinary.com/defmmlrqg/image/upload/v1655627649/Pro%20Wellness/login-tree_guim4t.jpg'
</script>

<template>
  <div h-screen>
    <div col-span-12 bg-top class="h-2/5" :style="{ background: `url(${img})` }">
      1
    </div>
    <div col-span-12 rounded-12 px-16 bg-white-500 pt-16 mt--10 class="h-3/5 dark:(bg-gradient-to-b from-dark-500 to-dark-100)">
      <h2 font-bold text-xl>
        Welcome
      </h2>
      <input id="" appearance-none w-full bg-transparent mt-8 py-1 text-sm border-b-2 border-gray-300 dark:bg-transparent type="text" name="" placeholder="User ID">
      <input id="" appearance-none w-full bg-transparent mt-8 py-1 text-sm border-b-2 border-gray-300 dark:bg-transparent type="password" name="" placeholder="Password">
      <div flex h-full flex-col items-center mt-8>
        <el-button w-full round type="success">
          Sing In
        </el-button>
        <router-link text-sm text-gray-500 mt-4 to="/">
          Forgot Password?
        </router-link>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>

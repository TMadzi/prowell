<script setup lang="ts">
const img = 'https://res.cloudinary.com/defmmlrqg/image/upload/v1655627649/Pro%20Wellness/login-tree_guim4t.jpg'
</script>

<template>
  <div grid grid-cols-12>
    <div col-span-12 h-52 bg-top :style="{ background: `url(${img})` }">
      1
    </div>
    <div col-span-12 rounded-2xl px-16 bg-white-500 h-auto py-16 mt--12>
      <h2 font-bold text-xl>
        Welcome
      </h2>
      <input id="" appearance-none w-full bg-transparent mt-8 py-1 text-sm border-b-2 border-gray-300 type="text" name="" placeholder="User ID">
      <input id="" appearance-none w-full bg-transparent mt-8 py-1 text-sm border-b-2 border-gray-300 type="password" name="" placeholder="Password">
      <div flex flex-col items-center mt-8>
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

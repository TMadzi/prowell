<script setup lang="ts">
</script>

<template>
  <div class="bg-whiteFade mt-20 px-6 pt-2 pb-12">
    <header class="abolute top-0 w-full flex flex-col">
      <h2 class="text-2xl text-text leading-relaxed tracking-wider ">
        News
      </h2>
      <div class="w-12 mt-2 bg-gradient-to-r from-primary via-primary to-primaryAccent h-1" />
    </header>
    <p class="mt-6 mb-6 text-text tracking-wider">
      This will health news and updates from the Prowellness team. It will also include updates that the medical aid companies can pass on. Potential place for targetted ads at some point?s
    </p>
    <router-link to="/learn" class=" text-center flex mx-auto justify-center mt-12 w-48 text-center tracking-wider bg-primary text-whiteFade border-2 border-primary px-8 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round>
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

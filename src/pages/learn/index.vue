<script setup lang="ts">

</script>

<template>
  <div class="bg-whiteFade mt-20 px-6 pt-2 pb-12">
    <header class="abolute top-0 w-full flex flex-col">
      <h2 class="text-2xl text-text leading-relaxed tracking-wider ">
        Learn More
      </h2>
      <div class="w-12 mt-2 bg-gradient-to-r from-primary via-primary to-primaryAccent h-1" />
    </header>
    <p class="mt-6 mb-6 text-text tracking-wider">
      Keep up to date with our frequently updated information.
    </p>
    <div class="grid grid-cols-12 gap-6">
      <router-link to="/learn/how" class="flex flex-col gap-3 justify-between items-center p-4 col-span-6 rounded-lg shadow-2xl h-32">
        <h5 class="text-xs uppercase text-text tracking-wider">
          How to
        </h5>
        <font-awesome-icon class="text-4xl text-primary" icon="book-medical" />
        <h5 class="text-xs uppercase text-text tracking-wider">
          USE
        </h5>
      </router-link>
      <router-link to="/learn/news" class="flex flex-col gap-3 justify-between items-center p-4 col-span-6 rounded-lg shadow-2xl h-32">
        <h5 class="text-xs uppercase text-text tracking-wider">
          MEDICAL
        </h5>
        <font-awesome-icon class="text-4xl text-primary" icon="comment-medical" />
        <h5 class="text-xs uppercase text-text tracking-wider">
          UPDATES
        </h5>
      </router-link>
      <router-link to="/learn/ncds" class="flex flex-col gap-3 justify-between items-center p-4 col-span-6 rounded-lg shadow-2xl h-32">
        <h5 class="text-xs uppercase text-text tracking-wider">
          About
        </h5>
        <font-awesome-icon class="text-4xl text-primary" icon="notes-medical" />
        <h5 class="text-xs uppercase text-text tracking-wider">
          NCDs
        </h5>
      </router-link>
      <router-link to="/learn/info" class="flex flex-col gap-3 justify-between items-center p-4 col-span-6 rounded-lg shadow-2xl h-32">
        <h5 class="text-xs uppercase text-text tracking-wider">
          About
        </h5>
        <font-awesome-icon class="text-4xl text-primary" icon="info-circle" />
        <h5 class="text-xs uppercase text-text tracking-wider">
          Us
        </h5>
      </router-link>
    </div>
    <router-link to="/" class=" text-center flex mx-auto justify-center mt-12 w-48 text-center tracking-wider bg-primary text-whiteFade border-2 border-primary px-8 md:px-16 py-3 rounded-full group hover:(bg-whiteFade text-primary) focus:outline-none transition duration-500 ease-in-out" round>
      <font-awesome-icon class="group-hover:text-primary text-2xl self-end text-whiteFade mr-2" icon="arrow-left" />
      BACK
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

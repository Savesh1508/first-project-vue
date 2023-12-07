<script setup>
import {
  RT_HOME
} from '../../constants/routeNames'

// import useRouter from 'vue-router';
</script>

<template>
  <main class="h-screen w-full flex flex-col items-center justify-center">
    <h1 class="text-2xl text-orange-600 font-bold uppercase mb-4">Not found page</h1>
    <router-link :to="{name: RT_HOME}" class="text-lg text-blue-500">Home Page</router-link>

  </main>
</template>

<style scoped>
</style>
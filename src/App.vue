<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 40px;
}
</style>

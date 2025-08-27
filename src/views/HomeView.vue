<template>
  <main>
    <Header />
    <Suspense>
      <CatsList />
    </Suspense>
  </main>
</template>

<script setup>
import { Suspense } from "vue";

import CatsList from "@/components/CatsList.vue";
import Header from "@/components/Header.vue";
</script>

<style scoped></style>

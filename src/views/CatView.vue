<template>
  <main>
    <Header />
    <Suspense>
      <CatPage />
    </Suspense>
  </main>
</template>

<script setup>
import { Suspense } from "vue";

import CatPage from "@/components/CatPage.vue";
import Header from "@/components/Header.vue";
</script>

<style scoped></style>

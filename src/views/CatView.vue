<template>
  <Suspense>
    <CatPage />
  </Suspense>
</template>

<script setup>
import { Suspense } from "vue";

import CatPage from "@/components/CatPage.vue";
</script>

<style scoped></style>

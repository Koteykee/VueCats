<template>
  <Suspense>
    <CatsList />
    <template #fallback>
      <div class="loader"></div>
    </template>
  </Suspense>
</template>

<script setup>
import { Suspense } from "vue";

import CatsList from "@/components/CatsList.vue";
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 100%;
  height: 22px;
  color: #40aff0;
  border: 2px solid;
  position: relative;
}
.loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  background: linear-gradient(
    150deg,
    rgba(50, 215, 237, 1) 0%,
    rgba(95, 131, 199, 1) 60%
  );
  animation: l6 2s infinite;
}
@keyframes l6 {
  100% {
    inset: 0;
  }
}
</style>

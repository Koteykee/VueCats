<template>
  <nav class="nav">
    <router-link :to="`/`">
      <h1>Cat Wiki</h1>
    </router-link>
    <Search />
    <Suspense>
      <RandomCat />
    </Suspense>
  </nav>
</template>

<script setup>
import { Suspense } from "vue";
import { useRoute } from "vue-router";

import Search from "./Search.vue";
import RandomCat from "./RandomCat.vue";

const route = useRoute();
</script>

<style scoped>
.nav {
  width: 100%;
  height: 60px;
  background: linear-gradient(
    150deg,
    rgba(50, 215, 237, 1) 0%,
    rgba(95, 131, 199, 1) 60%
  );
  border-bottom: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
}

h1 {
  font-size: 24px;
  cursor: pointer;
}
</style>

<template>
  <div>
    <router-link :to="`/cat/random`">
      <h2 class="randomCat" @click="store.fetchRandomCat">Random Cat</h2>
    </router-link>
  </div>
</template>

<script setup>
import { useCatStore } from "@/stores/catStore";

const store = useCatStore();
</script>

<style scoped>
.randomCat {
  font-size: 24px;
  padding-right: 10px;
  cursor: pointer;
}
</style>

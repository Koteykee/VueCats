<template>
  <div>
    <router-link :to="`/cat/random`">
      <h2 class="randomCat" @click="isAtRandom">Random Cat</h2>
    </router-link>
  </div>
</template>

<script setup>
import { useCatStore } from "@/stores/catStore";
import { useRoute } from "vue-router";

const store = useCatStore();
const route = useRoute();

const isAtRandom = () => {
  if (route.params.id === "random") {
    store.fetchRandomCat();
  }
  return;
};
</script>

<style scoped>
.randomCat {
  font-size: 24px;
  cursor: pointer;
}
</style>

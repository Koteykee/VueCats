<template>
  <div class="catsContainer">
    <ul class="catsList">
      <li v-for="cat in cats" :key="cat.id">
        <CatListItem :cat="cat" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { getCatList } from "@/api/api";
import CatListItem from "./CatListItem.vue";

const cats = ref([]);

const fetchCatList = async () => {
  try {
    const response = await getCatList();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

cats.value = await fetchCatList();
console.log(cats.value);
</script>

<style scoped>
.catsContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.catsList {
  list-style: none;
  margin: 10px 0;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  box-sizing: border-box;
}
</style>

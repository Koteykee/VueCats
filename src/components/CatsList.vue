<template>
  <div class="catsList">
    <ul>
      <li>
        <CatListItem />
        <p>{{ cats.value }}</p>
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
</script>

<style scoped>
.catsList {
  width: 80%;
  list-style: none;
  margin: 10px 0;
  display: flex;
}
</style>

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
</script>

<style scoped>
.catsContainer {
  margin: 10px auto;
}

.catsList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

li {
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 1500px) {
  .catsList {
    padding: 0 80px;
  }
}

@media (max-width: 1299px) {
  .catsList {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 999px) {
  .catsList {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 699px) {
  .catsList {
    grid-template-columns: 1fr;
  }
}
</style>

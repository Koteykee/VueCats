<template>
  <div class="search-wrapper">
    <input
      v-model="searchQuery"
      @input="fetchCatList"
      type="text"
      class="search"
      placeholder="Search for a cat breed"
    />
    <ul v-if="searchResults" class="cats-container">
      <p class="error" v-if="searchError">
        Sorry, something went wrong, please try again.
      </p>
      <p class="error" v-if="!searchError && searchResults.length === 0">
        No results found.
      </p>
      <template v-else>
        <li
          v-for="searchResult in searchResults"
          :key="searchResult.id"
          @click="fetchCatPage(searchResult.id)"
          class="cat"
        >
          <router-link :to="`/cat/${searchResult.id}`" class="cat-inner">
            {{ searchResult.breeds[0].name }}
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { getCatList } from "@/api/api";

const searchQuery = ref("");
const queryTimeout = ref(null);
const searchResults = ref(null);
const searchError = ref(null);
const cat = ref("");

const fetchCatList = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const response = await getCatList();

        const filtered = response.data.filter((cat) =>
          cat.breeds[0].name
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
        );

        searchResults.value = filtered;
        searchError.value = null;
      } catch {
        searchError.value = true;
      }
      return;
    }
    searchResults.value = null;
  }, 300);
};

const fetchCatPage = (searchResult) => {
  cat.value = searchResult;
  searchResults.value = null;
  searchQuery.value = "";
};
</script>

<style scoped>
.search-wrapper {
  width: 30%;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid rgb(12, 107, 196);
  border-radius: 4px;
}

.search {
  width: 100%;
  padding: 4px;
  border: none;
}

.cats-container {
  position: absolute;
  top: 100%;
  width: 100%;
  margin-top: 6px;
  border-radius: 10px;
  overflow: hidden;
  z-index: 100;
}

.cat {
  background-color: white;
  padding: 10px;
  list-style: none;
  font-size: 18px;
  cursor: pointer;
}

.cat-inner {
  padding: 12px;
  border-radius: 10px;
  display: block;
}

.cat:hover .cat-inner {
  background-color: #f1f1f1;
}

.error {
  font-size: 18px;
  background-color: white;
  padding: 10px;
}
</style>

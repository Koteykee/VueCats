<template>
  <div class="cat">
    <h2 class="catName">{{ cat.breeds[0].name }}</h2>
    <hr />
    <div class="catContainer">
      <div>
        <div>
          <BreedChars :breed="cat.breeds[0]" />
        </div>
        <div
          v-show="cat.breeds[0].vetstreet_url || cat.breeds[0].vcahospitals_url"
        >
          <hr />
          <p>Click below if you want to know even more about this breed!</p>
          <hr />
          <a
            :href="cat.breeds[0].vetstreet_url"
            v-show="cat.breeds[0].vetstreet_url"
            target="_blank"
            >Vetstreet</a
          >
          <br />
          <a
            :href="cat.breeds[0].vcahospitals_url"
            v-show="cat.breeds[0].vcahospitals_url"
            target="_blank"
            >Vcahospitals</a
          >
        </div>
      </div>
      <div>
        <img :src="cat.url" alt="Cat Photo" class="catImg" />
        <p>Temperament: {{ cat.breeds[0].temperament }}</p>
        <p>Origin: {{ cat.breeds[0].origin }}</p>
        <p>Weight: {{ cat.breeds[0].weight.metric }} kg</p>
        <p>Life span: {{ cat.breeds[0].life_span }} years</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

import BreedChars from "./BreedChars.vue";
import { useCatStore } from "@/stores/catStore";
import { storeToRefs } from "pinia";

const route = useRoute();

const store = useCatStore();

const { cat } = storeToRefs(store);

if (route.params.id !== "random") {
  store.catId = route.params.id;
  await store.fetchCatPage();
} else {
  await store.fetchRandomCat();
}
</script>

<style scoped>
.catName {
  margin: 14px;
  font-size: 26px;
}

hr {
  border: none;
  height: 2px;
  background: #31bbfc;
  border-radius: 1px;
  margin: 10px 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.catContainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.catImg {
  width: 500px;
}

a:hover {
  text-decoration: underline;
}

.cat {
  font-size: 18px;
}

p {
  max-width: 500px;
}

@media (max-width: 900px) {
  .catContainer {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
}
</style>

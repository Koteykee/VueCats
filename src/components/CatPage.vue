<template>
  <main>
    <h2 class="catName">{{ cat.breeds[0].name }}</h2>
    <hr />
    <div class="catContainer">
      <div>
        <p>Breed Characteristics:</p>
        <p>Adaptability: {{ cat.breeds[0].adaptability }}</p>
        <p>Affection level: {{ cat.breeds[0].affection_level }}</p>
        <p>Stranger friendly: {{ cat.breeds[0].stranger_friendly }}</p>
        <p>Child friendly: {{ cat.breeds[0].child_friendly }}</p>
        <p>Dog friendly: {{ cat.breeds[0].dog_friendly }}</p>
        <p>Energy level: {{ cat.breeds[0].energy_level }}</p>
        <p>Grooming: {{ cat.breeds[0].grooming }}</p>
        <p>Health issues: {{ cat.breeds[0].health_issues }}</p>
        <p>Intelligence: {{ cat.breeds[0].intelligence }}</p>
        <p>Shedding level: {{ cat.breeds[0].shedding_level }}</p>
        <p>Social needs: {{ cat.breeds[0].social_needs }}</p>
        <p>Vocalisation: {{ cat.breeds[0].vocalisation }}</p>
        <p>Hairless: {{ cat.breeds[0].hairless }}</p>
        <p>Suppressed tail: {{ cat.breeds[0].suppressed_tail }}</p>
        <p>Short legs: {{ cat.breeds[0].short_legs }}</p>
        <p>Hypoallergenic: {{ cat.breeds[0].hypoallergenic }}</p>
        <hr />
        <p>
          Click the links below if you want to know even more about this breed!
        </p>
        <hr />
        <a :href="cat.breeds[0].vetstreet_url" target="_blank">Vetstreet</a>
        <br />
        <a :href="cat.breeds[0].vcahospitals_url" target="_blank"
          >Vcahospitals</a
        >
      </div>
      <div>
        <p>{{ cat.breeds[0].name }}</p>
        <img :src="cat.url" alt="Cat Photo" class="catImg" />
        <p>Temperament: {{ cat.breeds[0].temperament }}</p>
        <p>Origin: {{ cat.breeds[0].origin }}</p>
        <p>Weight: {{ cat.breeds[0].weight.metric }} kg</p>
        <p>Life span: {{ cat.breeds[0].life_span }} years</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

import { getCatById } from "@/api/api";

const route = useRoute();

const cat = ref([]);

const fetchCatPage = async () => {
  try {
    const response = await getCatById(route.params.id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

cat.value = await fetchCatPage();
</script>

<style scoped>
.catName {
  margin: 14px;
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
  justify-content: space-around;
}

.catImg {
  width: 500px;
}
</style>

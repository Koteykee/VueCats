import { ref } from "vue";
import { defineStore } from "pinia";

import { getRandomCat, getCatById } from "@/api/api";

export const useCatStore = defineStore("cat", () => {
  const cat = ref({});
  const catId = ref("");

  const fetchCatPage = async () => {
    try {
      const response = await getCatById(catId.value);
      cat.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRandomCat = async () => {
    try {
      const response = await getRandomCat();
      cat.value = response.data[0];
    } catch (error) {
      console.log(error);
    }
  };

  return { cat, catId, fetchRandomCat, fetchCatPage };
});

<template>
  <div class="breed">
    <h3>Breed Characteristics:</h3>
    <CharCircles
      v-for="key in keys"
      :key="key"
      :title="formatTitle(key)"
      :value="breed[key]"
    />
  </div>
</template>

<script setup>
import CharCircles from "./CharCircles.vue";
import { defineProps } from "vue";

const props = defineProps({
  breed: {
    type: Object,
    required: true,
  },
});

const keys = [
  "adaptability",
  "affection_level",
  "stranger_friendly",
  "child_friendly",
  "dog_friendly",
  "energy_level",
  "grooming",
  "health_issues",
  "intelligence",
  "shedding_level",
  "social_needs",
  "vocalisation",
  "hairless",
  "suppressed_tail",
  "short_legs",
  "hypoallergenic",
];

function formatTitle(str) {
  let title = str.replace(/_/g, " ");
  return title.charAt(0).toUpperCase() + title.slice(1);
}
</script>

<style scoped>
@media (max-width: 900px) {
  .breed {
    margin: 0 auto;
    width: fit-content;
  }
}
</style>

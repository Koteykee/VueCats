<template>
  <div class="charRow">
    <span>{{ title }}: </span>
    <div class="charCircles">
      <span
        v-for="n in 5"
        :key="n"
        class="circle"
        :class="{ filled: n <= value }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { title, value } = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.charCircles {
  display: flex;
  gap: 4px;
  align-items: center;
}

.circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgb(252, 221, 175);
  border: 1px solid rgb(116, 116, 116);
  position: relative;
  top: 1px;
}

.filled {
  background-color: #4caf50;
}

.charRow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  margin-top: 6px;
}
</style>

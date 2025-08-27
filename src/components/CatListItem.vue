<template>
  <div class="catListItem">
    <div class="catImgWrapper">
      <img :src="cat.url" class="catImg preview" />
      <img :src="cat.url" class="catImg full" />
    </div>
    <p class="catName">{{ cat.breeds[0].name }}</p>
  </div>
</template>

<script setup>
const { cat } = defineProps({
  cat: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.catListItem {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 300px;
  background-color: rgb(93, 193, 218);
  padding: 6px;
  border: 2px solid rgb(43, 81, 153);
  box-sizing: border-box;
  overflow: visible;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.catImgWrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.catImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.catImg.preview {
  z-index: 1;
}

.catImg.full {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 60%);
  height: auto;
  object-fit: contain;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  padding: 10px;
  transform: translate(-50%, -50%);
  max-width: 500px;
  max-height: 500px;
}

.catImgWrapper:hover .catImg.full {
  opacity: 1;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.catName {
  font-size: 20px;
  padding: 4px;
}
</style>

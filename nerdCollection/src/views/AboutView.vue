<script lang="ts">
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import aboutImage from "@/assets/about.png"

export default defineComponent({
  data() {
    return {
      imagePath: aboutImage
    }
  },
  components: {
    Banner,
  },
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <RouterView />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

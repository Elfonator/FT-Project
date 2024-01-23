<script lang="ts">
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import homeImage from "@/assets/home.png"
import Carousel from '@/components/CarouselComponent.vue'

export default defineComponent({
  data() {
    return {
      imagePath: homeImage
    }
  },
  components: {
    Banner, Carousel
  },
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <v-spacer></v-spacer>
  <Carousel />
  <RouterView />
</template>

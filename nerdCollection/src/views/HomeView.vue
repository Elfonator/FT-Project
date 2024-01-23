<script lang="ts">
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import homeImage from "@/assets/home.png"
import Carousel from '@/components/CarouselComponent.vue'
import DetailsView from "@/views/DetailsView.vue";

export default defineComponent({
  data() {
    return {
      imagePath: homeImage
    }
  },
  components: {
    DetailsView,
    Banner, Carousel
  },
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <v-divider class="mx-4 mb-1"></v-divider>
  <v-spacer></v-spacer>
  <Carousel />
  <RouterView />
</template>

<style>
.bg {
  background-image: url("@/assets/banner-bg.jpg");
}
</style>
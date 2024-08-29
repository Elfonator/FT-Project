<script lang="ts">
//Importing necessary functions and components from Vue and external sources
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import homeImage from "@/assets/home.png"
import Carousel from '@/components/CarouselComponent.vue'
import DetailsView from "@/views/DetailsView.vue";

export default defineComponent({
  //Data function initializes the components data
  data() {
    return {
      //Initial data property for the home image path
      imagePath: homeImage
    }
  },
  //External component
  components: {
    DetailsView,
    Banner, Carousel
  },
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <Carousel />

</template>

<style>

</style>

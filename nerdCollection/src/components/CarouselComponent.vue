<script lang="ts">
import {defineComponent} from 'vue'
//Importing the useComicsStore function from the comicsStore module
import {useComicsStore} from "@/stores/comicsStore";
import type {Comics} from "@/interfaces/types";

export default defineComponent({
  name: "Carousel",
  //Computed property to retrieve comics from the comicsStore
  computed: {
    comics(): Comics[] {
      return useComicsStore().getComics;
    },
  },
});
</script>

<template>
  <v-card class="align-self-center" style="position: relative; width: 100%; height: 800px">
    <v-card-title class="text-center font-weight-black comic-font d-flex justify-center align-center" style="width: 900px; height: 80px;">
    NOW Available! </v-card-title>
    <!-- Vuetify Carousel component to display images -->
  <v-carousel>
    <v-carousel-item
      v-for="comicsItem in comics"
      :key="comicsItem.id"
      :src="comicsItem.imageUrl" contain></v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
.comic-font {
  font-family: 'Bangers', sans-serif;
  font-size: 36px;
  color: #ff5733;
}
</style>

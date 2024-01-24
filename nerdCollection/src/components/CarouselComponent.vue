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
  <v-card class="align-self-center" style="position: relative; top:100px; width: 100%">
    <v-card-title class="text-center font-weight-black" style="width: 900px">Lets Go!</v-card-title>
    <!-- Vuetify Carousel component to display images -->
  <v-carousel>
    <v-carousel-item  v-for="comicsItem in comics" :key="comicsItem.id" :src="comicsItem.imageUrl" cover></v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<style scoped>

</style>
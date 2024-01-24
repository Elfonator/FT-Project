<script lang="ts">
import {defineComponent} from 'vue'
import {useComicsStore} from "@/stores/comicsStore";
import type {Comics} from "@/interfaces/types";

export default defineComponent({
  name: "Carousel",
  computed: {
    comics(): Comics[] {
      return useComicsStore().getComics;
    },
  },
});
</script>

<template>
  <v-card class="align-self-center" style="position: relative; top:150px;">
    <v-card-title class="text-center font-weight-black" style="width: 900px">Lets Go!</v-card-title>
  <v-carousel>
    <v-carousel-item  v-for="comicsItem in comics" :key="comicsItem.id" :src="comicsItem.imageUrl" cover></v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<style scoped>

</style>
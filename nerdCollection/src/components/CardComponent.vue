<script lang="ts">
//Import the defineComponent function from Vue
import { defineComponent } from 'vue';
import type { Comics } from '@/interfaces/types'

export default defineComponent({
  name: 'Card',
  //Properties
  props: {
    //Define the 'comicsItem' prop with type checking
    comicsItem: {
      type: Object as () => Comics | undefined,
      required: true,
    },
  },
  methods: {
    //Method to navigate back to the '/catalog'
    goBack() {
      this.$router.push('/catalog');
    },
  },
});
</script>

<template>
  <v-card class="mx-auto my-12" width="500px" style="top:20px;" v-if="comicsItem">
    <!-- Display comics details such as img, title, year, publisher and author -->
    <v-img height="350" :src="comicsItem.imageUrl"></v-img>
    <v-card-title>{{ comicsItem.title }} Details</v-card-title>
    <v-card-text>
      <div class="my-4 text-subtitle-1">
        Year: {{ comicsItem.year }}
      </div>
      <div class="my-4 text-subtitle-1">
        Publisher: {{ comicsItem.publisher }}
      </div>
      <div class="my-4 text-subtitle-1">
        Author: {{ comicsItem.author }}
      </div>
      <!-- Button to navigate back using the 'goBack' method -->
      <v-btn @click="goBack">Back to Comics</v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
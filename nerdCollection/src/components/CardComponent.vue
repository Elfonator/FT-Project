<script lang="ts">
import { defineComponent } from 'vue';
import { useComicsStore } from '@/stores/comicsStore';
import type { Comics } from '@/interfaces/types'

export default defineComponent({
  name: 'Card',
  props: {
    comicsItem: {
      type: Object as () => Comics | undefined,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$router.push('/catalog');
    },
  },
});
</script>

<template>
  <v-card class="mx-auto my-12" width="500px" style="top:20px;" v-if="comicsItem">
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

      <!-- Add any other details you want to display -->

      <v-btn @click="goBack">Back to Comics</v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
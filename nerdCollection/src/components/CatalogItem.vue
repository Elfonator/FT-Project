<script lang="ts">
import { defineComponent } from 'vue';
import { useComicsStore } from '@/stores/comicsStore';

export default defineComponent({
  props: {
    comics: Object,
  },
  setup(props) {
    const comicsStore = useComicsStore();

    const showUpdateDialog = () => {
      // Implement logic to show update dialog/modal
      console.log('Update clicked for:', props.comics);
    };

    const deleteComic = () => {
      // Implement logic to delete the comic
      comicsStore.deleteComics(props.comics.id);
      console.log('Deleted:', props.comics);
    };

    return {
      showUpdateDialog,
      deleteComic,
    };
  },
});
</script>

<template>
  <v-card>
    <v-card-title>{{ comics.title }}</v-card-title>
    <v-card-subtitle>{{ comics.publisher }}</v-card-subtitle>
    <v-card-text>{{ comics.author }}</v-card-text>
    <v-card-text>{{ comics.year }}</v-card-text>

    <v-card-actions>
      <v-btn @click="showUpdateDialog">Update</v-btn>
      <v-btn @click="deleteComic">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import { useComicsStore } from '@/stores/comicsStore';

export default defineComponent({
  name: 'Dropdown',
  setup() {
    const comicsStore = useComicsStore();

    const computedSelectedPublisher = computed({
      get: () => comicsStore.selectedPublisher,
      set: (value) => (comicsStore.setSelectedPublisher(value)),
    });
    const publishers = comicsStore.publishers;
    const filterComics = () => {
      console.log('Selected Publisher:', computedSelectedPublisher);
    };

    return {
      computedSelectedPublisher,
      publishers,
      filterComics
    };
  },
});
</script>

<template>
  <v-sheet class="flex-1-1-100 align-center" style="position: absolute; top: 250px; height: 50px; width: 100%">
  <v-select
      v-model="computedSelectedPublisher"
      :items="publishers"
      label="Select Publisher"
      @change="filterComics"></v-select>
  </v-sheet>
</template>

<style scoped>

</style>
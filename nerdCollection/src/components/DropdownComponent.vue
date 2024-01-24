<script lang="ts">
import {computed, defineComponent } from "vue";
//Importing the useComicsStore function from the comicsStore module
import { useComicsStore } from '@/stores/comicsStore';

export default defineComponent({
  name: 'Dropdown',
  //Function for component setup logic
  setup() {
    //Accessing comicsStore
    const comicsStore = useComicsStore();
    //Defining a computed property for the selected publisher
    const computedSelectedPublisher = computed({
      get: () => comicsStore.selectedPublisher, //Returning current value
      set: (value) => (comicsStore.setSelectedPublisher(value)),//Assigning new value
    });
    //Getting list of publishers from the comicsStore
    const publishers = comicsStore.publishers;
    // Method to log the selected publisher after changes
    const filterComics = () => {
      console.log('Selected Publisher:', computedSelectedPublisher);
    };
    //Returning data and methods to be used in template
    return {
      computedSelectedPublisher,
      publishers,
      filterComics
    };
  },
});
</script>

<template>
  <!-- Vuetify Dropdown component -->
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
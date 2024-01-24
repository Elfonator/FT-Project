<script lang="ts">
//Importing necessary functions and components from Vue and external sources
import { defineComponent } from 'vue';
import { useComicsStore } from '@/stores/comicsStore';
import Card from "@/components/CardComponent.vue";
import type { Comics } from "@/interfaces/types";

export default defineComponent({
  //External component
  components: { Card },
  //Props definition for the unique identifier of the comics item
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  //Computed property to retrieve the details based on the provided ID
  computed: {
    comicsItem(): Comics | undefined {
      return useComicsStore().getComicById(this.id);
    },
  },
});
</script>

<template>
<Card v-if="comicsItem" :comicsItem="comicsItem" />
  <div v-else>
    <!-- Handling the case when comicsItem is undefined -->
    <p>Comic not found</p>
  </div>
  <RouterView />
</template>

<style scoped>

</style>
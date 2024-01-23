<script lang="ts">
import { defineComponent } from 'vue';
import { useComicsStore } from '@/stores/comicsStore';
import Card from "@/components/CardComponent.vue";
import type { Comics } from "@/interfaces/types";

export default defineComponent({
  components: { Card },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
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
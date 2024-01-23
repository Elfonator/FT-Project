<script lang="ts">
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import catalogImage from "@/assets/catalog.png"

export default defineComponent({
  data() {
    return {
      imagePath: catalogImage
    }
  },
  components: {
    Banner,
  },
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <RouterView />
</template>

<style scoped>

</style>
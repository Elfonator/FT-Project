<script lang="ts">
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import homeImage from "@/assets/home.png"

export default defineComponent({
  data() {
    return {
      imagePath: homeImage
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

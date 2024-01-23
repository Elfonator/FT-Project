<script lang="ts">
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import contactImage from "@/assets/contact.png"

export default defineComponent({
  data() {
    return {
      imagePath: contactImage
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
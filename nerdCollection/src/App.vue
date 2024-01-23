<script lang="ts">
import {defineComponent} from "vue";
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/FooterComponent.vue";
import {useTheme} from "vuetify";

export default defineComponent({
  components: {Navigation, Footer}
});
</script>

<template>
  <v-app class="bgApp">
    <Navigation />
    <RouterView />
    <Footer />
  </v-app>
</template>

<style scoped>
</style>
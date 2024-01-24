<script lang="ts">
//Importing necessary functions and components from Vue and external sources
import {defineComponent} from "vue";
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/FooterComponent.vue";

export default defineComponent({
  //External components
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
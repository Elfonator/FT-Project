<script lang="ts">
//Importing necessary functions and components from Vue and external sources
import {defineComponent } from 'vue';
import Banner from '@/components/BannerComponent.vue'
import contactImage from "@/assets/contact.png"

export default defineComponent({
  //Data function initializes the components data
  data() {
    return {
      //Initial data property for the contact image path
      imagePath: contactImage
    }
  },
  //External component
  components: {
    Banner,
  },
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <RouterView />
  <!-- Main content card with contact information and map -->
  <v-card class="mx-auto my-12" width="800px" position="relative">
    <v-row>
    <v-col cols="5" class="align-center justify-center">
      <v-card-item>
    <img height="500px" src="@/assets/elfo.png" alt="portrait"/>
      </v-card-item>
    </v-col>
    <v-col cols="5" class="align-center justify-center">
    <v-card-item>
      <v-card-title >Hi, I'm Elfo and I love comics!</v-card-title>
      <v-divider class="mx-4 mb-1"></v-divider>
      <v-card-subtitle>
        <span class="me-1" style="font-weight: bold">Email: elfo.here@gmail.com</span>
      </v-card-subtitle>
      <v-card-subtitle>
        <span class="me-1" style="font-weight: bold">Phone: +421 951 774 534</span>
      </v-card-subtitle>
    </v-card-item>
      <!-- Embed Google Maps iframe -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10608.761996819381!2d18.096253192616757!3d48.33764359135594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b39276af4af7b%3A0xa12d3f17de2ff66c!2sZobor!5e0!3m2!1ssk!2ssk!4v1706049759425!5m2!1ssk!2ssk"
            width="600"
            height="405"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </v-col>
    </v-row>
    <v-divider class="mx-4 mb-1"></v-divider>

    <!-- Display of the working hours -->
    <v-card-title class="text-center">Working Hours</v-card-title>
    <div class="d-flex justify-center">
      <v-chip-group class="px-6">
        <v-chip class="mx-2">Mon-Fri: 8:00AM - 16:30PM</v-chip>
        <v-chip class="mx-2">Sat-Sun: 11:00AM - 18:00PM</v-chip>
      </v-chip-group>
    </div>
    <v-divider class="mx-4 mb-1"></v-divider>
  </v-card>
</template>
<style scoped>

</style>

<script lang="ts">
//Importing functions from the Vue library
import { defineComponent } from 'vue';

export default defineComponent({
  //Assigning a name to the component
  name: 'Navigation',
});

</script>

<template>
  <!-- Template for the navigation bar -->
  <v-app-bar app color="white" grow>
    <!-- Router link to the home page through logo -->
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" class="ma-15" height="60px"/>
    </router-link>
    <!-- Navigation buttons with router links for each section -->
    <v-btn to="/">Home<v-icon icon="mdi-home"></v-icon></v-btn>
    <v-btn to="/catalog">Catalog<v-icon icon="mdi-view-list"></v-icon></v-btn>
    <v-btn to="/publisher">Publishers<v-icon icon="mdi-account-tie"></v-icon></v-btn>
    <v-btn to="/contact">Contact<v-icon icon="mdi-email"></v-icon></v-btn>
  </v-app-bar>
</template>
<script lang="ts">
//Importing functions from the Vue library
import { defineComponent } from "vue";
// Defining a Vue component using function
export default defineComponent({
  //Assigning a name to the component
  name: "Footer",
});
</script>

<template>
  <!-- template for the footer -->
  <v-footer app class="text-center">
    <v-container>
      <v-row>
        <v-col>
          <!-- footer content -->
          <p>&copy; 2024 Comicsarium Nerd Collection</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>

</style>
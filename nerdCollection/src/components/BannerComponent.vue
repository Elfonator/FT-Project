<script lang="ts">
//Import the defineComponent function from Vue
import {defineComponent} from "vue";
export default defineComponent({
  name: 'Banner',
  //Properties
  props: {
    imagePath: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
    <v-sheet class="flex-1-1-100 ma-0 pa-0" style="position: absolute; top: 30px; left: 0;" >
      <img :src="imagePath" alt="banner Image" width="100%"/>
    </v-sheet>
</template>

<style scoped>

</style>
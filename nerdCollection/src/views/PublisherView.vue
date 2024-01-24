<script lang="ts">
//Importing necessary functions and components from Vue and external sources
import {computed, defineComponent, onMounted} from 'vue';
import Banner from '@/components/BannerComponent.vue'
import publisherImage from "@/assets/publisher.png"
import Dropdown from "@/components/DropdownComponent.vue"
import {useComicsStore} from "@/stores/comicsStore";


export default defineComponent({
  //Data function initializes the components data
  data() {
    return {
      //Initial data property for the publisher image path
      imagePath: publisherImage,
    }
  },
  //External components
  components: {
    Banner, Dropdown
  },
  //Function for component setup logic
  setup() {
    //Accessing comicsStore
    const comicsStore = useComicsStore();
    //Computed property for filtered comics based on selected publisher
    const filteredComics = computed(() => {
      const selectedPublisher = comicsStore.selectedPublisher;
      //Check
      console.log('Selected Publisher:', selectedPublisher);
      // Filter comics based on the selected publisher
      return comicsStore.comics.filter((comic) => comic.publisher === selectedPublisher);
    });

    //Load comics data on component mount
    onMounted(() => {
      comicsStore.loadComics();
      console.log('Data loaded:', comicsStore.comics);
    });
   //Return properties to be used in the template
    return {
      filteredComics,
    };
  },
  methods: {
    //Function to navigate to detail view of specific comics
    goToDetails(id: number) {
      this.$router.push({name: 'details', params: {id}});
    }
  }
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <!-- Display the Dropdown component for selecting publishers -->
  <Dropdown />
  <!-- Container for displaying filtered comics -->v
  <v-sheet class="flex-1-1-100 align-center" style="width: 100%; height:100%; position:absolute; top: 310px;">
    <v-list-item class="align-center">
      <v-sheet class="flex-1-1-100">
        <v-row align="center" justify="center">
            <v-col
                v-for="comics in filteredComics" :key="comics.id"
                cols="auto"
            >
              <v-card
                  class="mx-auto"
                  width="200"
                  height="300"
                  :image="comics.imageUrl"
                  theme="dark" @click="goToDetails(comics.id)"
              >
              </v-card>
            </v-col>
          </v-row>
      </v-sheet>
    </v-list-item>
  </v-sheet>

</template>

<style scoped>

</style>
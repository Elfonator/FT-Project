<script lang="ts">
import {computed, defineComponent, onMounted} from 'vue';
import Banner from '@/components/BannerComponent.vue'
import publisherImage from "@/assets/publisher.png"
import Dropdown from "@/components/DropdownComponent.vue"
import {useComicsStore} from "@/stores/comicsStore";


export default defineComponent({
  data() {
    return {
      imagePath: publisherImage,
    }
  },
  components: {
    Banner, Dropdown
  },
  setup() {
    const comicsStore = useComicsStore();

    const filteredComics = computed(() => {
      const selectedPublisher = comicsStore.selectedPublisher;
      console.log('Selected Publisher:', selectedPublisher);

      return comicsStore.comics.filter((comic) => comic.publisher === selectedPublisher);
    });

    // Load comics on component mount
    onMounted(() => {
      comicsStore.loadComics();
      console.log('Data loaded:', comicsStore.comics);
    });

    return {
      filteredComics,
    };
  },
});
</script>

<template>
  <Banner :imagePath="imagePath" />
  <Dropdown />
  <v-sheet class="flex-1-1-100 align-center" style="width: 100%; height:100%; position:absolute; top: 310px;">
    <v-list-item class="align-center">
      <v-sheet class="flex-1-1-100">
        <v-row align="center" justify="center">
            <v-col
                v-for="comic in filteredComics" :key="comic.id"
                cols="auto"
            >
              <v-card
                  class="mx-auto"
                  width="200"
                  height="300"
                  :image="comic.imageUrl"
                  theme="dark"
              >
              </v-card>
            </v-col>
          </v-row>
      </v-sheet>
    </v-list-item>
  </v-sheet>
  <RouterView />
</template>

<style scoped>

</style>
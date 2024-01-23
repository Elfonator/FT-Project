<script lang="ts">
import {defineComponent} from "vue";
import Banner from '@/components/BannerComponent.vue'
import catalogImage from "@/assets/catalog.png"
import { useComicsStore} from '@/stores/comicsStore';
import type {Comics} from "@/interfaces/types";

export default defineComponent({
  data() {
    return {
      imagePath: catalogImage,
      addComicsDialog: false,
      newComics: { id: 0, title: '', year: 0, publisher:'', author: '', imageUrl:'' } as Comics,
      editComicsDialog: false,
      editedComics: { id: 0, title: '', year: 0, publisher:'', author: '', imageUrl:'' } as Comics,
    };
  },
  components:{
    Banner,
  },
  computed: {
    comics(): Comics[] {
      return useComicsStore().getComics;
    },
  },
  methods: {
    addComics() {
      if (this.newComics.title && this.newComics.author && this.newComics.publisher) {
        //Add the new comics using the store action
        useComicsStore().addComics({...this.newComics, id: Date.now()});
        //Clear the form and close the dialog
        this.newComics = {id: 0, title: '', year: 0, publisher: '', author: '', imageUrl: ''};
        this.closeComicsDialog();
      } else {
        //Handle validation error
        console.error('Title, author and publisher are required.');
      }
    },
    editComics(comicId: number) {
      this.editComicsDialog = true;
      // Find the comic by ID using the store getter
      const comicsToEdit = useComicsStore().getComicById(comicId);

      if (comicsToEdit) {
        // Open the edit comic dialog and pre-fill the form with the current comic data
        this.editComicsDialog = true;
        this.editedComics = { ...comicsToEdit };
      } else {
        //Handle error
        console.error('Comics not found.');
      }
    },
    saveEditedComics() {
      //Validate the edited data
      if (this.editedComics.title && this.editedComics.author) {
        //Update using the store action
        useComicsStore().updateComics(this.editedComics);
        //Close the dialog and reset the form
        this.closeComicsDialog();
      } else {
        // Handle validation error (e.g., show an error message)
        console.error('Title and author are required.');
      }
    },
    deleteComics(id: number) {
      //Delete using the store action
      useComicsStore().deleteComics(id);
    },
    closeComicsDialog() {
      //Close dialog and reset the form
      this.addComicsDialog = false;
      this.editComicsDialog = false;
      this.newComics = {id: 0, title: '', year: 0, publisher: '', author: '', imageUrl: ''};
      this.editedComics = {id: 0, title: '', year: 0, publisher: '', author: '', imageUrl: ''};
    },
    goToDetails(id: number) {
      this.$router.push({name: 'details', params: {id}});
    }
  }
});
</script>

<template>
  <Banner :imagePath="imagePath"></Banner>
  <v-container fluid style="position: relative; top:230px; ">
    <v-btn color="green" @click="addComicsDialog = true">Add Comics</v-btn>
    <v-spacer></v-spacer>
    <!-- Add comics dialog -->
    <v-dialog v-model="addComicsDialog">
      <v-card>
        <v-card-title>Add Comics</v-card-title>
        <v-card-text>
          <v-text-field v-model="newComics.title" label="Title"></v-text-field>
          <v-text-field v-model="newComics.year" label="Year"></v-text-field>
          <v-text-field v-model="newComics.publisher" label="Publisher"></v-text-field>
          <v-text-field v-model="newComics.author" label="Author"></v-text-field>
          <v-text-field v-model="newComics.imageUrl" label="ImageURL"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="addComics">Add</v-btn>
          <v-btn @click="addComicsDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Display comics -->
    <v-card>
    <v-list class="overflow-hidden" >
      <v-list-item v-if="comics.length">
        <!-- Use v-row to create  each comics -->
        <v-row v-for="comicsItem in comics" :key="comicsItem.id" @click="goToDetails(comicsItem.id)">
          <v-col cols="1" class="align-center justify-center">
            <img :src="comicsItem.imageUrl" alt="Comic Image" class="mr-2" height="80px"/>
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-right" style="font-weight: bold">
            {{ comicsItem.title }}
          </v-col>
          <v-col class="d-flex align-center justify-right">
            {{ comicsItem.year }}
          </v-col>
          <v-col class="d-flex align-center justify-right">
            {{ comicsItem.publisher }}
          </v-col >
          <v-col class="d-flex align-center justify-right">
            {{ comicsItem.author }}
          </v-col>
          <v-col class="d-flex align-center justify-right">
            <v-btn color="yellow" @click="editComics(comicsItem.id)">Edit</v-btn>
            <v-btn color="red" @click="deleteComics(comicsItem.id)">Delete</v-btn>
          </v-col>
          <v-divider class="mx-4"></v-divider>
        </v-row>

        <!-- Edit comics dialog-->
        <v-dialog v-model="editComicsDialog" max-width="500px">
          <v-card>
            <v-card-title>Edit Comic</v-card-title>
            <v-card-text>
              <v-text-field v-model="editedComics.title" label="Title"></v-text-field>
              <v-text-field v-model="editedComics.year" label="Year"></v-text-field>
              <v-text-field v-model="editedComics.publisher" label="Publisher"></v-text-field>
              <v-text-field v-model="editedComics.author" label="Author"></v-text-field>
              <v-text-field v-model="editedComics.imageUrl" label="ImageURL"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" @click="saveEditedComics">Save</v-btn>
              <v-btn  @click="closeComicsDialog">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list-item>
      <v-alert v-else>No comics available.</v-alert>
    </v-list>
    </v-card>
  </v-container>
  <RouterView />
</template>


<style scoped>

</style>
<script lang="ts">
import {defineComponent} from "vue";
import { useComicsStore} from '@/stores/comicsStore';
import type {Comics} from "@/interfaces/types";

export default defineComponent({
  data() {
    return {
      addComicsDialog: false,
      newComics: { id: 0, title: '', year: 0, publisher:'', author: '', imageUrl:'' } as Comics,
      editComicsDialog: false,
      editedComics: { id: 0, title: '', year: 0, publisher:'', author: '', imageUrl:'' } as Comics,
    };
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
  }
});
</script>

<template>
  <v-container>
    <v-btn @click="addComicsDialog = true">Add Comics</v-btn>

    <!-- Add comics dialog -->
    <v-dialog v-model="addComicsDialog">
      <v-card>
        <v-card-title>Add Comic</v-card-title>
        <v-card-text>
          <!-- form inputs here -->
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addComics">Add</v-btn>
          <v-btn @click="addComicsDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Display comics -->
    <v-list>
      <v-list-item-group v-if="comics.length">
        <!-- Use v-row to create a horizontal row for each comics -->
        <v-row v-for="comicsItem in comics" :key="comicsItem.id" class="mb-2">
          <!-- Image column -->
          <v-col>
            <img :src="comicsItem.imageUrl" alt="Comic Image" class="mr-2" height="60px"/>
          </v-col>
          <!-- Title column -->
          <v-col>
            <div>{{ comicsItem.title }}</div>
          </v-col>
          <!-- Year column -->
          <v-col>
            <div>{{ comicsItem.year }}</div>
          </v-col>
          <!-- Publisher column -->
          <v-col>
            <div>{{ comicsItem.publisher }}</div>
          </v-col>
          <!-- Author column -->
          <v-col>
            <div>{{ comicsItem.author }}</div>
          </v-col>
          <!-- Action column -->
          <v-col>
            <v-btn @click="editComics(comicsItem.id)">Edit</v-btn>
            <v-dialog v-model="editComicsDialog" max-width="500px">
              <v-card>
                <v-card-title>Edit Comic</v-card-title>
                <v-card-text>
                  <v-text-field v-model="editedComics.title" label="Title"></v-text-field>
                  <v-text-field v-model="editedComics.year" label="Year"></v-text-field>
                  <v-text-field v-model="editedComics.publisher" label="Publisher"></v-text-field>
                  <v-text-field v-model="editedComics.author" label="Author"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="saveEditedComics">Save</v-btn>
                  <v-btn @click="closeComicsDialog">Cancel</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn @click="deleteComics(comicsItem.id)">Delete</v-btn>
          </v-col>
        </v-row>
      </v-list-item-group>
      <v-alert v-else>No comics available.</v-alert>
    </v-list>
  </v-container>
</template>


<style scoped>

</style>
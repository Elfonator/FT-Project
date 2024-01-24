//Importing the defineStore function from Pinia
import { defineStore } from 'pinia';
//Importing necessary types and modules
import type { Comics } from '@/interfaces/types';
import comicsData from '@/json/items.json';
import {isRef, ref} from 'vue'; // ref - reactive reference, isRef - utility to check value is a ref object
import type { Ref } from 'vue' // interface

//Defining the shape of the ComicsState
export interface ComicsState {
    comics: Comics[];
    publishers: string[];
    selectedPublisher: Ref<string>;
}
//Defining and exporting useComicsStore
export const useComicsStore = defineStore({
    //Unique identifier for store
    id: 'comics',
    //Initial state for store
    state: (): ComicsState => ({
        comics: comicsData,
        //Creating new Set object with unique values from array of all publisher in comicsData and then transform object into array
        publishers: Array.from(new Set(comicsData.map((comics) => comics.publisher))),
        selectedPublisher: ref('DC Comics'),
    }),
    //Getters for accessing state properties
    getters: {
        getComics: (state) => state.comics,
        getComicById: (state) => (id: number) => state.comics.find((comics) => comics.id === id),
        getPublishers: (state) => state.publishers,
        getSelectedPublisher: (state) => state.selectedPublisher,
    },
    //Actions for modifying state
    actions: {
        //Add new comics to store
        addComics(newComics: Comics) {
            newComics.id = Date.now();
            this.comics.push(newComics);
            if (!this.publishers.includes(newComics.publisher)) {
                this.publishers.push(newComics.publisher);
            }
            this.saveToLocalStorage();
        },
        //Update existing comics
        updateComics(updatedComics: Comics) {
            const index = this.comics.findIndex((comics) => comics.id === updatedComics.id);
            if (index !== -1) {
                this.comics[index] = updatedComics;
                this.saveToLocalStorage();
            }
        },
        //Delete comics from the store by ID
        deleteComics(id: number) {
            this.comics = this.comics.filter((comics) => comics.id !== id);
            this.saveToLocalStorage();this.saveToLocalStorage();
            },
        //Set the selected publisher in the store
        setSelectedPublisher(publisher: string | Ref<string>) {
            this.selectedPublisher = isRef(publisher) ? publisher.value : publisher;
            this.saveToLocalStorage();
        },
        //Load initial data into the store
        loadComics() {
            const storedStateString = localStorage.getItem('comicsState');
            if (storedStateString) {
                const storedState = JSON.parse(storedStateString);
                this.comics = storedState.comics;
                this.publishers = storedState.publishers;
                this.selectedPublisher = storedState.selectedPublisher;
            } else {
                this.comics = comicsData;
                this.publishers = Array.from(new Set(comicsData.map((comics) => comics.publisher)));
                this.selectedPublisher = 'DC Comics';
            }
        },
        saveToLocalStorage() {
            const stateToStore = {
                comics: this.comics,
                publishers: this.publishers,
                selectedPublisher: this.selectedPublisher,
            };
            localStorage.setItem('comicsState', JSON.stringify(stateToStore));
        },
    },
});
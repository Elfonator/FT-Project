import { defineStore } from 'pinia';
import type { Comics } from '@/interfaces/types';
import comicsData from '@/json/items.json';
import {isRef, ref} from "vue";
import type { Ref } from 'vue'

export interface ComicsState {
    comics: Comics[];
    publishers: string[];
    selectedPublisher: Ref<string>;
}

export const useComicsStore = defineStore({
    id: 'comics',
    state: (): ComicsState => ({
        comics: comicsData,
        publishers: Array.from(new Set(comicsData.map((comics) => comics.publisher))),
        selectedPublisher: ref('DC Comics'),
    }),
    getters: {
        getComics: (state) => state.comics,
        getComicById: (state) => (id: number) => state.comics.find((comics) => comics.id === id),
        getPublishers: (state) => state.publishers,
        getSelectedPublisher: (state) => state.selectedPublisher,
    },
    actions: {
        addComics(newComics: Comics) {
            newComics.id = Date.now();
            this.comics.push(newComics);
            if (!this.publishers.includes(newComics.publisher)) {
                this.publishers.push(newComics.publisher);
            }
        },
        updateComics(updatedComics: Comics) {
            const index = this.comics.findIndex((comics) => comics.id === updatedComics.id);
            if (index !== -1) {
                this.comics[index] = updatedComics;
            }
        },
        deleteComics(id: number) {
            this.comics = this.comics.filter((comics) => comics.id !== id);
        },
        setSelectedPublisher(publisher: string | Ref<string>) {
            this.selectedPublisher = isRef(publisher) ? publisher.value : publisher;
        },
        loadComics() {
            this.comics = comicsData;
            this.publishers = Array.from(new Set(comicsData.map((comics) => comics.publisher)));
            this.setSelectedPublisher('DC Comics');
        },
    },
});
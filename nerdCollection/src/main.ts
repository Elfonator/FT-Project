//Import global styles
import './assets/main.css'
//Import necessary functions and libraries
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//Import root component (App.vue) and router
import App from './App.vue'
import router from './router'

//Vuetify configuration, importing styles, components, directives etc.
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
//Create Vuetify instance with components and directives
const vuetify = createVuetify({
    components,
    directives,
})

//Create the Vue app instance
const app = createApp(App)
//Enable -> use
app.use(createPinia()) //state management
app.use(router) //navigation
app.use(vuetify) //styling and UI

//App mounting
app.mount('#app')

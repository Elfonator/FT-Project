//Import the createRouter and createWebHistory functions from Vue Router
import { createRouter, createWebHistory } from 'vue-router'

//Creating router instance using createRouter
const router = createRouter({
  //Using createWebHistory for browser history mode, based on BASE_URL
  history: createWebHistory(import.meta.env.BASE_URL),
  //Defining routes for the application
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("@/views/ComicsView.vue"),
    },
    {
      path: "/publisher",
      name: "publisher",
      component: () => import("@/views/PublisherView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      //Route for displaying details of specific comics
      path:"/details/:id",
      name: "details",
      //Lazily load the DetailsView component when the route is visited
      component: () => import("@/views/DetailsView.vue"),
      //Pass the 'id' parameter as a prop to the DetailsView component
      props: (route) => ({ id: Number(route.params.id) })
    }
  ]
})
//Exporting the configured router instance
export default router

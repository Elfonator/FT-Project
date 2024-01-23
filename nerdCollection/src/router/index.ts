import { createRouter, createWebHistory } from 'vue-router'
import ComicsView from "@/views/ComicsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path:"/details/:id",
      name: "details",
      component: () => import("@/views/DetailsView.vue"),
      props: (route) => ({ id: Number(route.params.id) })
    }
  ]
})

export default router

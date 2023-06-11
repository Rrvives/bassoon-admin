import { createRouter, createWebHistory } from 'vue-router'
import Layouts from "@/layouts/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layouts
    },
  ]
})
export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PasteleroView from '@/views/PasteleroView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: PasteleroView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

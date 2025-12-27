import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import Co2MonitorView from '../views/Co2MonitorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/co2-monitor',
      name: 'co2Monitor',
      component: Co2MonitorView,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumView,
    },
  ],
})

export default router

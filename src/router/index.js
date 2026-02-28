import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import DatenschutzView from '../views/DatenschutzView.vue'
import EmissionsMonitorView from '../views/EmissionsMonitorView.vue'
import ReportingView from '../views/ReportingView.vue'
import VisionView from '../views/VisionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/reporting',
      name: 'reporting',
      component: ReportingView,
    },
    {
      path: '/emissions-monitor',
      name: 'emissions-monitor',
      component: EmissionsMonitorView,
    },
    {
      path: '/vision',
      name: 'vision',
      component: VisionView,
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: DatenschutzView,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumView,
    },
  ],

  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router

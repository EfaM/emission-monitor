import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import StellenangeboteView from '../views/StellenangeboteView.vue'
import HandlungsraeumeView from '../views/HandlungsraeumeView.vue'
import EmissionsMonitorView from '../views/EmissionsMonitorView.vue'
import ReportingView from '../views/ReportingView.vue'

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
      name: 'emissions-Monitor',
      component: EmissionsMonitorView,
    },
    {
      path: '/handlungsraeume',
      name: 'handlungsraeume',
      component: HandlungsraeumeView,
    },
    {
      path: '/stellenangebote',
      name: 'stellenangebote',
      component: StellenangeboteView,
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

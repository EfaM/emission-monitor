import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import Co2MonitorView from '../views/Co2MonitorView.vue'
import DatenlageView from '../views/DatenlageView.vue'
import StellenangeboteView from '../views/StellenangeboteView.vue'
import HandlungsraeumeView from '../views/HandlungsraeumeView.vue'

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
      path: '/co2-monitor',
      name: 'co2Monitor',
      component: Co2MonitorView,
    },
    {
      path: '/datenlage',
      name: 'datenlage',
      component: DatenlageView,
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

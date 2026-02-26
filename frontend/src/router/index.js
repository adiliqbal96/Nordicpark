import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import TicketView from '../views/TicketView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import CookieView from '../views/CookieView.vue'
import TermsView from '../views/TermsView.vue'
import ParkingTermsView from '../views/ParkingTermsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/ticket', name: 'ticket', component: TicketView },
  { path: '/contact', name: 'contact', component: ContactView },
  {
    path: '/privatlivspolitik',
    name: 'privacy',
    component: PrivacyPolicyView
  },
  {
    path: '/cookiepolitik',
    name: 'cookie',
    component: CookieView
  },
  {
    path: '/handelsbetingelser',
    name: 'terms',
    component: TermsView
  },
  {
    path: '/parkeringsbetingelser',
    name: 'parking-terms',
    component: ParkingTermsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router

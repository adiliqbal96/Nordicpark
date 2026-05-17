import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import TicketView from '../views/TicketView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import CookieView from '../views/CookieView.vue'
import TermsView from '../views/TermsView.vue'
import ParkingTermsView from '../views/ParkingTermsView.vue'
import ResidentialView from '../views/ResidentialView.vue'
import BusinessView from '../views/BusinessView.vue'
import PrivateView from '../views/PrivateView.vue'

const routes = [
  { path: '/', name: 'intro', component: IntroView },
  { path: '/erhverv', name: 'erhverv', component: HomeView },
  { path: '/om-os', name: 'about', component: AboutView },
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
  },
  {
    path: '/service/boligforeninger',
    name: 'service-residential',
    component: ResidentialView
  },
  {
    path: '/service/erhverv-retail',
    name: 'service-business',
    component: BusinessView
  },
  {
    path: '/service/privat-kontrol',
    name: 'service-private',
    component: PrivateView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
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

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Umetnine from '../views/umetnine.vue'
import KonkretnaUmetnina from '../views/umetnina-konkretna.vue'
import PregledUmetnina from '../views/umetnine-pregled.vue'
import Umetnici from '../views/umetnici.vue'
import Login from '../views/login.vue'
import MojNalog from '../views/moj-nalog.vue'
import ONama from '../views/o-nama.vue'
import Registracija from '../views/registracija.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/umetnine',
    name: 'umetnine',
    component: Umetnine
  },
  {
    path: '/konk-umetnina',
    name: 'konk-umetnina',
    component: KonkretnaUmetnina
  },
  {
    path: '/pregled-umetnina',
    name: 'pregled-umetnina',
    component: PregledUmetnina
  },
  {
    path: '/moj-nalog',
    name: 'moj-nalog',
    component: MojNalog
  },
  {
    path: '/umetnici',
    name: 'umetnici',
    component: Umetnici
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/o-nama',
    name: 'o-nama',
    component: ONama
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: Registracija
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

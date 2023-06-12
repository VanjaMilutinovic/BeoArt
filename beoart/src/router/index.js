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
import HomeViewEng from '../views/home-eng.vue'
import UmetnineEng from '../views/umetnine-eng.vue'
import KonkretnaUmetninaEng from '../views/umetnina-konkretna-eng.vue'
import PregledUmetninaEng from '../views/umetnine-pregled-eng.vue'
import UmetniciEng from '../views/umetnici-eng.vue'
import LoginEng from '../views/login-eng.vue'
import MojNalogEng from '../views/moj-nalog-eng.vue'
import ONamaEng from '../views/o-nama-eng.vue'
import RegistracijaEng from '../views/registracija-eng.vue'
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
    path: '/konk-umetnina/:id',
    name: 'konk-umetnina',
    component: KonkretnaUmetnina,
    props: true
  },
  {
    path: '/pregled-umetnina/:id',
    name: 'pregled-umetnina',
    component: PregledUmetnina,
    props: true
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
  },
  {
    path: '/eng',
    name: 'home-eng',
    component: HomeViewEng
  },
  {
    path: '/umetnine-eng',
    name: 'umetnine-eng',
    component: UmetnineEng
  },
  {
    path: '/konk-umetnina-eng/:id',
    name: 'konk-umetnina-eng',
    component: KonkretnaUmetninaEng,
    props: true
  },
  {
    path: '/pregled-umetnina-eng/:id',
    name: 'pregled-umetnina-eng',
    component: PregledUmetninaEng,
    props: true
  },
  {
    path: '/moj-nalog-eng',
    name: 'moj-nalog-eng',
    component: MojNalogEng
  },
  {
    path: '/umetnici-eng',
    name: 'umetnici-eng',
    component: UmetniciEng
  },
  {
    path: '/login-eng',
    name: 'login-eng',
    component: LoginEng
  },
  {
    path: '/o-nama-eng',
    name: 'o-nama-eng',
    component: ONamaEng
  },
  {
    path: '/registracija-eng',
    name: 'registracija-eng',
    component: RegistracijaEng
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

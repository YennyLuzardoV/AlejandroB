import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeCarrousel from '../views/HomeCarrousel.vue'
import BiografiaView from '../views/BiografiaView.vue'
import Exhibicion from '../views/ExhibicionView.vue'
import Contacto from '../views/ContactoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeCarrousel
  },
  {
    path: '/biografia',
    name: 'biografia',
    component: () => import(/* webpackChunkName: "biografia" */ '../views/BiografiaView.vue')
  },
  {
    path:'/biografia',
    name:'biografia',
    component: BiografiaView
  },
  {
    path:'/exhibicion',
    name:'exhibicion',
    component: Exhibicion
  },
  {
    path:'/contacto',
    name:'contacto',
    component: Contacto
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/ceremony',
    name: 'ceremony',
    component: () => import('../views/Ceremony.vue')
  }, {
    path: '/party',
    name: 'party',
    component: () => import('../views/Party.vue')
  }, {
    path: '/charities',
    name: 'charities',
    component: () => import('../views/Charities.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

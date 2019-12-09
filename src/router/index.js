import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('../views/Home.vue'),
      home: () => import('../views/Home.vue'),
      ceremony: () => import('../views/Ceremony.vue'),
      party: () => import('../views/Party.vue'),
      charities: () => import('../views/Charities.vue'),
      accomodation: () => import('../views/Accomodation.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

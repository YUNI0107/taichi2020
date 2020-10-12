import Vue from 'vue'
import VueRouter from 'vue-router'
import Paper from '../views/Paper'
import Most from '../views/Most'
import Best from '../views/Best'
import Poster from '../views/Poster'
import Demo from '../views/Demo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/paper'
  },
  {
    path: '/paper',
    name: 'Paper',
    component: Paper,
  },
  {
    path: '/most',
    name: 'Most',
    component: Most,
  },
  {
    path: '/best',
    name: 'Best',
    component: Best,
  },
  {
    path: '/poster',
    name: 'Poster',
    component: Poster,
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  }
]

const router = new VueRouter({
  routes
})

export default router

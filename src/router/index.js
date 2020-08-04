import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PostJobs from '../views/PostJobs.vue'
import JobPosted from '../views/JobPosted.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect : {
      name: 'Dashboard',
    } 
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/PostJobs',
    name: 'PostJobs',
    component: PostJobs
  },
  {
    path: '/JobPosted',
    name: 'JobPosted',
    component: JobPosted
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

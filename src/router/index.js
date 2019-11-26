import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

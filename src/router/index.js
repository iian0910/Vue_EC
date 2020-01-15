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
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'productsList',
        name: 'ProductsList',
        component: () => import('../views/ProductsList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orderList',
        name: 'OrderList',
        component: () => import('../views/OrderList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Coupons.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/products',
    name: 'Prducts',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'Prduct',
    component: () => import('../views/Product.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

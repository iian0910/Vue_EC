import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backEnd/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backEnd/Dashboard.vue'),
    children: [
      {
        path: 'productsList',
        name: 'ProductsList',
        component: () => import('../views/backEnd/ProductsList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orderList',
        name: 'OrderList',
        component: () => import('../views/backEnd/OrderList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backEnd/Coupons.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/',
    name: 'frontEnd',
    component: () => import('../views/frontEnd/FrontEnd.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/frontEnd/Index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontEnd/About.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/frontEnd/News.vue')
      },
      {
        path: 'favourable',
        name: 'Favourable',
        component: () => import('../views/frontEnd/Favourable.vue')
      },
      {
        path: 'characters',
        name: 'Characters',
        component: () => import('../views/frontEnd/Characters.vue')
      },
      {
        path: 'characters/winnie',
        name: 'Character_winnie',
        component: () => import('../views/frontEnd/character/Character_winnie.vue')
      },
      {
        path: 'characters/pig',
        name: 'Character_pig',
        component: () => import('../views/frontEnd/character/Character_pig.vue')
      },
      {
        path: 'characters/tiger',
        name: 'Character_tiger',
        component: () => import('../views/frontEnd/character/Character_tiger.vue')
      },
      {
        path: 'characters/eeyore',
        name: 'Character_eeyore',
        component: () => import('../views/frontEnd/character/Character_eeyore.vue')
      },
      {
        path: 'characters/rabbit',
        name: 'Character_rabbit',
        component: () => import('../views/frontEnd/character/Character_rabbit.vue')
      },
      {
        path: 'characters/kanga',
        name: 'Character_kanga',
        component: () => import('../views/frontEnd/character/Character_kanga.vue')
      },
      {
        path: 'characters/roo',
        name: 'Character_roo',
        component: () => import('../views/frontEnd/character/Character_roo.vue')
      },
      {
        path: 'characters/owl',
        name: 'Character_owl',
        component: () => import('../views/frontEnd/character/Character_owl.vue')
      },
      {
        path: 'characters/robin',
        name: 'Character_robin',
        component: () => import('../views/frontEnd/character/Character_robin.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/frontEnd/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/frontEnd/Product.vue')
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/frontEnd/Checkout.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('../views/frontEnd/CustomerCheckout.vue')
      },
      {
        path: 'payment_success/:orderId',
        name: 'PaymentSuccess',
        component: () => import('../views/frontEnd/PaymentSuccess.vue')
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingCart from '@/views/ShoppingCart'
import CheckoutResult from '@/views/CheckoutResult'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout-result',
    name: 'CheckoutResult',
    component: CheckoutResult
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

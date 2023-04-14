import { createRouter, createWebHistory } from 'vue-router';

import Checkout from '../Views/Checkout.vue';
import ProductCart from '../Views/ProductCart.vue';
import ListProduct from '../Views/ListProduct.vue';
import teste from '../Views/teste.vue';

const routes = [
  { path: '/product-cart', component: ProductCart },
  { path: '/product-list', component: ListProduct },
  { path: '/checkout', component: Checkout },
  { path: '/', component: teste },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router
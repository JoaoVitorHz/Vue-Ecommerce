import { createRouter, createWebHistory } from 'vue-router';

import Checkout from '../Views/Checkout.vue';
import ProductCart from '../Views/ProductCart.vue';
import ListProduct from '../Views/ListProduct.vue';

const routes = [
  { path: '/product-cart', component: ProductCart },
  { path: '/product-list', component: ListProduct },
  { path: '/checkout', component: Checkout },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router
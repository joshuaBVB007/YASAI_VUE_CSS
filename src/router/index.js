import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/wall',
      name: 'wall',
      component: () => import('../views/Wall.vue')
    },
    {
      path: '/shower',
      name: 'shower',
      component: () => import('../views/ShowerProduct.vue')
    },
  ]
})

export default router

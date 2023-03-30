import { createRouter, createWebHistory } from 'vue-router'

const BaseLayout = () => import('@/layouts/BaseLayout.vue')
const HomeView = () => import('@/views/HomeView.vue')

const routes = [
   {
      path: '/',
      component: BaseLayout,
      meta: { onlyUserRegistered: true },
      children: [
         {
            path: '',
            component: HomeView,
            name: 'home',
         },
      ],
   },
]

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/views/MainLayout.vue';
import ServicesPage from '@/views/ServicesPage.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    name: 'MainLayout',
    meta: { title: 'Home' },
  },
  {
    path: '/ServicesPage',
    component: ServicesPage,
    name: 'ServicesPage',
    meta: { title: 'Services' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    name: 'NotFound',
    meta: { title: 'Not Found' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return savedPosition || { top: 0 };
  },
});

// Set dynamic page titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;

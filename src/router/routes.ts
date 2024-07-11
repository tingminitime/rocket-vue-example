import Index from '~/pages/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
    meta: {
      title: 'Home Page',
    },
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('~/pages/demo/index.vue'),
    meta: {
      title: 'Demo Page',
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('~/pages/cart/index.vue'),
    meta: {
      title: 'Cart Page',
    },
  },
  {
    path: '/mouse',
    name: 'mouse',
    component: () => import('~/pages/mouse/index.vue'),
    meta: {
      title: 'Mouse Page',
    },
  },
  {
    path: '/title',
    name: 'title',
    component: () => import('~/pages/title/index.vue'),
    meta: {
      title: 'Title Page',
    },
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('~/pages/posts/index.vue'),
    meta: {
      title: 'Posts Page',
    },
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('~/pages/todos/index.vue'),
    meta: {
      title: 'Todos Page',
    },
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('~/pages/member/index.vue'),
    meta: {
      title: 'Member Page',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('~/pages/NotFound.vue'),
  },
]

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
      description: 'Demo',
    },
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('~/pages/posts/index.vue'),
    meta: {
      title: 'Posts Page',
      description: 'Props',
    },
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('~/pages/member/index.vue'),
    meta: {
      title: 'Member Page',
      description: 'Fetch & Props',
    },
  },
  {
    path: '/mouse',
    name: 'mouse',
    component: () => import('~/pages/mouse/index.vue'),
    meta: {
      title: 'Mouse Page',
      description: 'Composables',
    },
  },
  {
    path: '/title',
    name: 'title',
    component: () => import('~/pages/title/index.vue'),
    meta: {
      title: 'Title Page',
      description: 'Composables & VueUse',
    },
  },
  {
    path: '/drill-message',
    name: 'drill-message',
    component: () => import('~/pages/drill-message/index.vue'),
    meta: {
      title: 'Drill Message Page',
      description: 'Component v-model & provide/inject',
    },
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('~/pages/todos/index.vue'),
    meta: {
      title: 'Todos Page',
      description: 'Store',
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('~/pages/cart/index.vue'),
    meta: {
      title: 'Cart Page',
      description: 'Store',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('~/pages/NotFound.vue'),
  },
]

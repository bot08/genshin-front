import Home from './views/Home.vue'
import Characters from './views/Characters.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    meta: { title: 'Главная' } 
  },
  {
    path: '/about',
    component: About,
    meta: { title: 'О нас' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/characters',
    component: Characters,
    meta: { title: 'Персонажи' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },

  { path: '/:path(.*)', component: NotFound },
]

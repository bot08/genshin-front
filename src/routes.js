import Home from './views/Home.vue'
import Dictionary from './views/Dictionary.vue'
import Characters from './views/Characters.vue'
import Character from './views/Character.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'


/*---------------------------Мини инстурция-----------------------------*/
// Для нововой страницы нужно добавить сверху страницу в импоты и добавить в константу снизу:
/*
    {
      path: '/about',
      component: About,
      meta: { title: 'О нас' },
    },
*/
// example of route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import('./views/About.vue')


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
  },
  {
    path: '/dictionary',
    component: Dictionary,
    meta: { title: 'Хиличурлский' },
  },
  {
    path: '/characters',
    component: Characters,
    meta: { title: 'Персонажи' },
  },
  {
    // TODO Роутинг с базы (ещё нужно создать)
    path: '/characters/:ChName',
    component: Character,
    meta: { title: 'Тарталья' },
  },

  { path: '/:path(.*)', component: NotFound },
]

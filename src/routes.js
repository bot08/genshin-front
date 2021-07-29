import Home from './views/Home.vue'
import Characters from './views/Characters.vue'
import Character from './views/Character.vue'
import Dictionary from './views/Dictionary.vue'
import Gacha from './views/Gacha.vue'
import Items from './views/Items.vue'
import About from './views/About.vue'
import User from './views/User.vue'
import NotFound from './views/NotFound.vue'


/*---------------------------Мини инстурция-----------------------------*/
// Для нововой страницы нужно добавить сверху страницу в импоты и добавить в константу снизу:
/*
    {
      path: '/about',
      component: About,
      meta: { title: 'О проекте' },
    },
*/
// example of route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import('./views/About.vue')
// TODO description (Уже есть функционал, просто написать каждой странице)


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    meta: { title: 'Главная - Genshin journey' } 
  },
  {
    path: '/characters',
    component: Characters,
    meta: { title: 'Персонажи - Genshin journey' }
  },
  {
    path: "/characters/:character",
    component: Character,
    meta: { title: 'Осмотр персонажа - Genshin journey' }
  },
  {
    path: '/dictionary',
    component: Dictionary,
    meta: { title: 'Хиличурлский - Genshin journey' }
  },
  {
    path: '/gacha',
    component: Gacha,
    meta: { title: 'Молитвы - Genshin journey' }
  },
  {
    path: '/items',
    component: Items,
    meta: { title: 'Предметы - Genshin journey' }
  },
  // Не относятся к игре и навигации
  {
    path: '/about',
    component: About,
    meta: { title: 'О проекте - Genshin journey' }
  },
  {
    path: "/user",
    component: User,
    meta: { title: 'Акаунт - Genshin journey' }
  },

  { path: '/:path(.*)', component: NotFound, meta: { title: '404 - Genshin journey' } },
]

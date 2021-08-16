import Home from './views/Home.vue'
import Characters from './views/Characters.vue'
import Character from './views/Character.vue'
import Dictionary from './views/Dictionary.vue'
import Gacha from './views/Gacha.vue'
import Items from './views/Items.vue'
import About from './views/About.vue'
// Lazy loaded
const User = () => import('./views/User.vue')
const NotFound = () => import('./views/NotFound.vue')


/*---------------------------Мини инстурция-----------------------------*/
// Для нововой страницы нужно добавить сверху страницу в импоты и добавить в константу снизу:
/*
    {
      path: '/about',
      component: About,
        meta: { 
          title: 'О проекте - Genshin journey',
          description: 'test' 
        }
    },
*/
// example of route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import('./views/About.vue')  // если прописывать сразу в роутере


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
      meta: { 
        title: 'Главная - Genshin journey',
        description: 'Сайт для любителей геншин импакт. Здесь вы сможете найти гайды, информацию о мобах, бездне, персонажах и много о чём другом! Genshin journey!' 
      }
  },
  {
    path: '/characters',
    component: Characters,
      meta: { 
        title: 'Персонажи - Genshin journey',
        description: 'Список персонажей. Genshin journey! Здесь вы сможете найти гайды, информацию о мобах, бездне, персонажах и много о чём другом!' 
      }
  },
  {
    path: "/characters/:character",
    component: Character,
      meta: { 
        title: 'Осмотр персонажа - Genshin journey',
        description: 'Сайт для любителей геншин импакт. Здесь вы сможете найти гайды, информацию о мобах, бездне, персонажах и много о чём другом!' 
      }
  },
  {
    path: '/dictionary',
    component: Dictionary,
      meta: { 
        title: 'Хиличурлский - Genshin journey',
        description: 'Хиличурлский язык. Геншин Джорней. Здесь вы сможете найти гайды, информацию о мобах, бездне, персонажах и много о чём другом!' 
      }
  },
  {
    path: '/gacha',
    component: Gacha,
      meta: { 
        title: 'Молитвы - Genshin journey',
        description: 'Баннеры молитв персонажей.' 
      }
  },
  {
    path: '/items',
    component: Items,
      meta: { 
        title: 'Предметы - Genshin journey',
        description: 'Предметы, оружие и самое разное!' 
      }
  },
  // Не относятся к игре и навигации
  {
    path: '/about',
    component: About,
      meta: { 
        title: 'О проекте - Genshin journey',
        description: 'О сайте Genshin Journey, способы связи.' 
      }
  },
  {
    path: "/user",
    component: User,
      meta: { 
        title: 'Акаунт - Genshin journey',
        description: 'Авторизация пользователя.' 
      }
  },

  // 404 error
  { path: '/:path(.*)', component: NotFound, meta: { title: '404 - Genshin journey', description: 'Not found' }},
]

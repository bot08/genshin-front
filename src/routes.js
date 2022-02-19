import Home from '@/views/Home.vue'
import CharactersList from '@/views/Characters/Index.vue'
import CharacterPage from '@/views/Characters/Character.vue'
import Dictionary from '@/views/Dictionary.vue'
import Gacha from '@/views/Gacha.vue'
import Items from '@/views/Items.vue'
import Useful from '@/views/Useful.vue'
import InteractiveMap from '@/views/InteractiveMap.vue'
import About from '@/views/About.vue'

import Settings from '@/views/Settings.vue'

// Lazy loaded
const User = () => import('@/views/User.vue')
const Dev = () => import('@/views/Dev.vue')
const NotFound = () => import('@/views/NotFound.vue')


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


/** 
 * @type {import('vue-router').RouterOptions['routes']} 
**/
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
    component: CharactersList,
      meta: { 
        title: 'Персонажи - Genshin journey',
        description: 'Список персонажей. Только на Genshin journey)!' 
      }
  },
  {
    path: "/characters/:character",
    component: CharacterPage,
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
        description: 'Хиличурлский язык. Сайт Геншин Джорней.' 
      }
  },
  {
    path: '/gacha',
    component: Gacha,
      meta: { 
        title: 'Молитвы - Genshin journey',
        description: 'Баннеры молитв персонажей, может когда-то и будут оружия.' 
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
  {
    path: '/useful',
    component: Useful,
      meta: { 
        title: 'Полезное - Genshin journey',
        description: 'Информация, которая может пригодиться. Геншин Джорней. Здесь вы сможете найти гайды, информацию о мобах, бездне, персонажах и много о чём другом!' 
      }
  },
  {
    path: '/map',
    component: InteractiveMap,
      meta: { 
        title: 'Интерактивная карта - Genshin journey',
        description: 'Интерактивная карта - место где вы сможете найти всё что угодно связанное с картой. Сундуки, испытания, гробницы и тд. Геншин Джорней.' 
      }
  },
  // Не относятся к игре
  {
    path: '/about',
    component: About,
      meta: { 
        title: 'О проекте - Genshin journey',
        description: 'О сайте Genshin Journey, заметки о проекте.' 
      }
  },
  {
    path: "/dev",
    component: Dev,
      meta: { 
        title: 'Информация для разработчиков - Genshin journey',
        description: 'API проекта Genshin journey, а также информация о android приложении.'
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
  {
    path: '/settings',
    component: Settings,
      meta: { 
        title: 'Настройки - Genshin journey',
        description: '' 
      }
  },

  // 404 error
  { path: '/:path(.*)', component: NotFound, meta: { title: '404 - Genshin journey', description: 'Not found' }},
]

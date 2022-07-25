import Home from '@/views/Home.vue'
import CharactersList from '@/views/Characters/Index.vue'
import CharacterPage from '@/views/Characters/Character.vue'
import Dictionary from '@/views/Dictionary.vue'
import Gacha from '@/views/Gacha.vue'
import Items from '@/views/Items.vue'
import Useful from '@/views/Useful.vue'
import InteractiveMap from '@/views/InteractiveMap.vue'
import About from '@/views/About.vue'
// Lazy loaded
const DevIndex = () => import('@/views/Dev/Index.vue')
const DevUser = () => import('@/views/Dev/User.vue')
const NotFound = () => import('@/views/NotFound.vue')


/*---------------------------Мини инстурция-----------------------------*/
// Для нововой страницы нужно добавить сверху страницу в импоты и добавить в константу снизу:
/*
    {
      path: '/about',
      component: About,
        meta: { 
          title: 'О проекте',
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
        title: 'Главная',
        description: 'Сайт для любителей геншин импакт. Здесь вы сможете найти информацию о молитвах, о мобах, бездне, персонажах и много о чём другом! Genshin journey!' 
      }
  },
  {
    path: '/characters',
    component: CharactersList,
      meta: { 
        title: 'Персонажи',
        description: 'Список персонажей. Только на Genshin journey)!' 
      }
  },
  {
    path: "/characters/:character",
    component: CharacterPage,
      meta: { 
        title: 'Осмотр персонажа',
        description: 'Сайт для любителей геншин импакт. Здесь вы сможете найти гайды, информацию о мобах, бездне, персонажах и много о чём другом!' 
      }
  },
  {
    path: '/dictionary',
    component: Dictionary,
      meta: { 
        title: 'Хиличурлский язык',
        description: 'Русско-хиличурлский словарь. Сайт Геншин Джорней.' 
      }
  },
  {
    path: '/gacha',
    component: Gacha,
      meta: { 
        title: 'Молитвы',
        description: 'Баннеры молитв персонажей, может когда-то и оружия...' 
      }
  },
  {
    path: '/items',
    component: Items,
      meta: { 
        title: 'Предметы',
        description: 'Предметы, оружие, еда и самое разное!' 
      }
  },
  {
    path: '/useful',
    component: Useful,
      meta: { 
        title: 'Полезное',
        description: 'Информация, которая может пригодиться в вашем приключении. Геншин Джорней или Genshin Journey?' 
      }
  },
  {
    path: '/map',
    component: InteractiveMap,
      meta: { 
        title: 'Интерактивная карта',
        description: 'Интерактивная карта - место где вы сможете найти всё что угодно связанное с картой. Сундуки, испытания, гробницы и тд. Геншин Джорней.' 
      }
  },
  // Не относятся к игре
  {
    path: '/about',
    component: About,
      meta: { 
        title: 'О проекте',
        description: 'О сайте Genshin Journey, заметки о проекте.' 
      }
  },
  {
    path: "/dev",
    component: DevIndex,
      meta: { 
        title: 'Информация для разработчиков',
        description: 'API проекта Genshin journey, а также информация о android приложении.'
      }
  },
  {
    path: "/dev/user",
    component: DevUser,
      meta: { 
        title: 'Акаунт',
        description: 'Авторизация пользователя.' 
      }
  },

  // 404 error
  { path: '/:path(.*)', component: NotFound, meta: { title: '404', description: 'Not found' }},
]

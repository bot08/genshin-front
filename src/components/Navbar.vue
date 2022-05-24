<template>
  <nav class="mt-14">
    <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="rounded-lg bg-gray-50 py-2 px-3 mt-8 shadow-lg text-lg font-medium block ml-8 transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50">
      <component :is="item.icon" class="hidden lg:inline h-5 w-5 lg:mx-1 v-align-min3-5"/>
      {{ item.name }}
    </router-link>
  </nav>


  <!-- Навигацию снизу(бета) смотреть в dev0.7(next) -->
</template>


<script>
import { MenuIcon, XIcon, TranslateIcon } from '@heroicons/vue/outline'
import { MoonIcon, HomeIcon, UserGroupIcon, SparklesIcon, InformationCircleIcon, SunIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Главная', href: '/', icon: HomeIcon },
  { name: 'Персонажи', href: '/characters', icon: UserGroupIcon },
  { name: 'Хиличурлский', href: '/dictionary', icon: TranslateIcon },
  { name: 'Молитвы', href: '/gacha', icon: SparklesIcon },
  { name: 'О проекте', href: '/about', icon: InformationCircleIcon },
]

export default {
  components: {
    MenuIcon,
    XIcon,
    MoonIcon,
    SunIcon
  },

  data: () => ({
    showNav: false,
    navigation
  }),
  
  methods: {
    themeSwitch() {
      const html = document.querySelector("html");
      if(localStorage.getItem('theme')=="dark"){
            html.classList.remove("dark");
            localStorage.setItem("theme", "white");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f9fafb");
        }
        else{
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#374151");
        }
    }
  }
}
</script>
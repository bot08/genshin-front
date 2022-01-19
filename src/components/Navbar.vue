<template>

  <!-- PC -->
  <nav class="bg-white dark:bg-gray-700 fixed w-full z-40 shadow shadow-gray-300 w-100 px-8 md:px-auto hidden md:block transition-colors">
    <div class="md:h-16 h-28 mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
      <!-- Logo -->
      <router-link to="/" class="text-indigo-500 md:order-1">
        <img class="h-10 w-10" src="/favicon.svg" alt="logo" />
      </router-link>
      <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
        <ul class="flex font-medium justify-between">
                  <!-- Active Link = text-indigo-500
                  Inactive Link = hover:text-indigo-500 -->
          <router-link v-for="item in navigation" :key="item.name" v :to="item.href" class="px-3 lg:px-5 md:py-2 text-gray-600 dark:text-gray-200"><component :is="item.icon" class="hidden lg:inline h-5 w-5" style="vertical-align: -3.5px"/> {{ item.name }} </router-link>
        </ul>
      </div>
      <div class="order-2 md:order-3">
        <button  @click="themeSwitch" type="button" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 dark:hover:bg-indigo-700 transition-colors text-gray-50 rounded-xl flex items-center gap-2">
                  <span class="sr-only">Theme</span>
                  <MoonIcon class="h-6 w-6 dark:hidden" aria-hidden="true"/>
                  <SunIcon class="h-6 w-6 hidden dark:block" aria-hidden="true"/>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile -->
  <nav class="fixed bottom-0 w-full border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 flex overflow-x-auto z-40 md:hidden">
    <router-link v-for="item in navigation" :key="item.name" v :to="item.href"
      class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 focus:text-orange-500">
      <component :is="item.icon" class="inline h-8 w-8 my-2.5 text-gray-600 dark:text-gray-300 mx-1" style="vertical-align: -3.5px" aria-hidden="true" />
    </router-link>	
  </nav>

</template>


<script>
import { TranslateIcon } from '@heroicons/vue/outline'
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
    MoonIcon,
    SunIcon
  },

  data() {
    return {
      navigation
    }
  },
  
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
    },
  }
}
</script>
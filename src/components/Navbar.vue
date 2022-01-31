<template>

  <!-- PC -->
  <nav class="bg-white dark:bg-gray-700 absolute md:fixed w-full z-40 shadow-sm w-100 px-5 md:px-2 lg:px-8 md:px-auto transition-colors">
    <div class="md:h-16 h-15 mx-auto md:px-4 flex items-center justify-between flex-nowrap">
      <!-- Logo -->
      <router-link to="/" class="order-1">
        <img class="h-8 w-8 md:h-10 md:w-10" src="/favicon.svg" alt="logo" />
      </router-link>
      <div class="hidden md:block text-gray-500 w-auto order-2">
        <ul class="flex font-medium justify-between">
          <router-link v-for="item in navigation" :key="item.name" v :to="item.href" class="px-3 lg:px-5 md:py-2 text-gray-600 dark:text-gray-200"><component :is="item.icon" class="hidden lg:inline h-5 w-5" style="vertical-align: -3.5px"/> {{ item.name }} </router-link>
        </ul>
      </div>
      <div class="flex order-2 lg:order-3 items-center">
        <SunIcon class="h-6 w-6 mr-2 text-gray-700 dark:text-gray-200" aria-hidden="true"/>
        <Switch @click="themeSwitch()" class="dark:bg-gray-900 bg-gray-200 relative inline-flex flex-shrink-0 h-[34px] w-[66px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out focus:outline-none">
          <span class="sr-only">themeSwitch</span>
          <span
            aria-hidden="true"
            class="dark:translate-x-8 translate-x-0 pointer-events-none inline-block h-[30px] w-[30px] rounded-full bg-white dark:bg-gray-200 shadow-lg transform ring-0 transition ease-in-out"
          />
        </Switch>
        <MoonIcon class="h-6 w-6 ml-2 text-gray-700 dark:text-gray-200" aria-hidden="true"/>
      </div>
    </div>
  </nav>

  <!-- Mobile -->
  <nav class="fixed bottom-0 w-full border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 flex overflow-x-auto z-40 md:hidden transition-colors">
    <router-link v-for="item in navigation" :key="item.name" v :to="item.href"
      class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out active:bg-gray-200 dark:active:bg-gray-800">
      <component :is="item.icon" class="inline h-8 w-8 my-2.5 text-gray-600 dark:text-gray-200 mx-1 v-align-min3-5" aria-hidden="true" />
    </router-link>	
  </nav>

</template>


<script>
import { TranslateIcon } from '@heroicons/vue/outline'
import { MoonIcon, HomeIcon, UserGroupIcon, SparklesIcon, InformationCircleIcon, SunIcon } from '@heroicons/vue/solid'
import { Switch } from '@headlessui/vue'

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
    SunIcon,
    Switch
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
<template>
  <nav class="fixed top-0 py-2.5 sm:py-3 px-4 sm:px-6 bg-gray-50 dark:bg-gray-700 transition-colors shadow-sm w-screen z-40">
    <div class="flex sm:flex-row justify-between mx-auto">
      <!-- Left part -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/">
          <span class="sr-only">Logo</span>
          <img class="h-8 w-8 sm:h-10 sm:w-10 md:mx-2" src="/favicon.svg" alt="logo" />
        </router-link>
        <!-- Pages -->
        <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="font-medium hidden md:block ml-7 lg:ml-8 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50">
          <component :is="item.icon" class="hidden lg:inline h-5 w-5 lg:mx-1 v-align-min3-5"/>
          {{ item.name }}
        </router-link>
      </div>

      <!-- Right part -->
      <div class="flex items-center">
        <div class="flex items-center lg:mr-5">
          <!-- theme PC -->
            <SunIcon class="h-6 w-6 mr-2 text-gray-600 dark:text-gray-200 hidden lg:block"/>
            <div @click="themeSwitch()" class="dark:bg-gray-800 bg-gray-200 relative flex-shrink-0 h-[34px] w-[66px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out focus:outline-none hidden md:inline-flex">
              <span class="sr-only">Theme switch</span>
              <span class="dark:translate-x-8 translate-x-0 pointer-events-none inline-block h-[30px] w-[30px] rounded-full bg-white dark:bg-gray-200 shadow-lg transform ring-0 transition ease-in-out"/>
            </div>
            <MoonIcon class="h-6 w-6 ml-2 text-gray-600 dark:text-gray-200 hidden lg:block"/>
          <!-- mobile theme btn -->
          <button
            type="button"
            @click="themeSwitch()"
            class="bg-white rounded-md p-2 ml-3 inline-flex md:hidden items-center justify-center text-gray-500 dark:text-gray-300 focus:outline-none active:ring-2 active:ring-inset active:ring-indigo-500 dark:bg-gray-800 transition-colors">
              <span class="sr-only">Theme switch (MOBILE)</span>
              <MoonIcon class="h-6 w-6 dark:hidden"/>
              <SunIcon class="h-6 w-6 hidden dark:block"/>
          </button>
          <!-- Menu -->
          <button
            type="button"
            @click="showNav = true"
            class="bg-white rounded-md p-2 ml-3 inline-flex md:hidden items-center justify-center text-gray-500 dark:text-gray-300 focus:outline-none active:ring-2 active:ring-inset active:ring-indigo-500 dark:bg-gray-800 transition-colors">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile -->
  <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
    <div v-if="showNav" class="fixed w-full h-screen top-0 p-2 inset-x-0 transition transform md:hidden z-40 origin-top-right">
      <div class="w-full bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden rounded-lg shadow-lg">
        <div class="px-5 pt-4 flex items-center justify-between">
          <!-- Logo -->
          <div>
            <img class="h-8 w-auto" src="/favicon.svg" alt="logo" />
          </div>
          <!-- X button -->
          <div class="-mr-2">
              <button @click="showNav = false" class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-500 dark:text-gray-300 focus:outline-none active:ring-2 active:ring-inset active:ring-indigo-500 dark:bg-gray-700">
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6"/>
              </button>
          </div>
        </div>
        <!-- nav -->
        <div class="px-2 pt-2 pb-3 space-y-1">
          <div v-for="item in navigation" :key="item.name">
            <button @click="this.$router.push({ path: item.href }); showNav = false" class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 outline-none">
              <component :is="item.icon" class="inline h-5 w-5 text-indigo-600 mx-1 v-align-min3-5"/>
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
      <!-- Close menu (content click) -->
      <div class="h-full w-full mt-3" @click="showNav = false"/>
    </div>
  </transition>

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

  data() {
    return {
      showNav: false,
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
    }
  }
}
</script>
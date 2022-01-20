<template>
    <div class="max-w-7xl mx-auto fixed w-screen top-0 z-40">
      <div class="relative pb-3 bg-gray-50 dark:bg-gray-700 w-screen transition-colors shadow-sm">

        <Popover>
          <div class="relative pt-3 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between h-9 sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <router-link to="/">
                    <span class="sr-only">Logo</span>
                    <img class="h-8 w-8 sm:h-10 sm:w-10" src="/favicon.svg" alt="logo" />
                  </router-link>
                  <div class="flex items-center md:hidden">
                    <button
                      type="button"
                      aria-expanded="false"
                      @click="themeSwitch"
                      class="bg-white rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-500 dark:text-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800">
                        <span class="sr-only">Theme</span>
                        <MoonIcon class="h-6 w-6 dark:hidden" aria-hidden="true"/>
                        <SunIcon class="h-6 w-6 hidden dark:block" aria-hidden="true"/>
                    </button>
                    <PopoverButton class="bg-white rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-500 dark:text-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true"/>
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-2 lg:pr-5 md:space-x-8">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50">
                  <component :is="item.icon" class="hidden lg:inline h-5 w-5 lg:mx-1 v-align-min3-5" aria-hidden="true" />
                  {{ item.name }}
                </router-link>
                <button
                      type="button"
                      @click="themeSwitch"
                      class="align-text-top text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 focus:outline-none">
                        <span class="sr-only">Theme</span>
                        <MoonIcon class="h-5 w-5 dark:hidden" aria-hidden="true"/>
                        <SunIcon class="h-5 w-5 hidden dark:block" aria-hidden="true"/>
                </button>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden dark:bg-gray-800">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="/favicon.svg" alt="logo" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-700">
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <PopoverButton v-for="item in navigation" :key="item.name" class="block">
                    <router-link v :to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200">
                      <component :is="item.icon" class="inline h-5 w-5 text-indigo-600 mx-1 v-align-min3-5" aria-hidden="true" />
                      {{ item.name }}
                    </router-link>
                  </PopoverButton>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

      </div>
    </div>


    <!-- Новую навигацию смотреть в dev0.7 или в билдах > 0.6.11 -->
</template>


<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
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
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
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
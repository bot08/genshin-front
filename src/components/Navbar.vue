<template>
    <div class="max-w-7xl mx-auto bg-white dark:bg-gray-800 fixed w-screen top-0 z-40">
      <div class="relative z-10 pb-3 bg-gray-100 dark:bg-gray-700 w-screen transition-colors">

        <Popover>
          <div class="relative pt-3 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <router-link to="/">
                    <span class="sr-only">Logo</span>
                    <img class="h-8 w-8 sm:h-10 sm:w-10" src="/favicon240.svg" alt="logo" />
                  </router-link>
                  <div class="flex items-center md:hidden">
                    <button
                      @click="darkThemeSwitch"
                      class="bg-white rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800">
                        <span class="sr-only">Theme</span>
                        <MoonIcon class="h-6 w-6" aria-hidden="true"/>
                    </button>
                    <PopoverButton class="bg-white rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true"/>
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-2 lg:pr-5 md:space-x-8">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50">
                  <component :is="item.icon" class="hidden lg:inline h-5 w-5 lg:mx-1" style="vertical-align: -3.5px" aria-hidden="true" />
                  {{ item.name }}
                </router-link>
                <button
                      @click="darkThemeSwitch"
                      class="align-text-top text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300 focus:outline-none">
                        <span class="sr-only">Theme</span>
                        <MoonIcon class="h-5 w-5" aria-hidden="true"/>
                </button>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden dark:bg-gray-800">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="/favicon240.svg" alt="logo" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-700">
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <PopoverButton v-for="item in navigation" :key="item.name" class="block">
                    <router-link v :to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800">
                      <component :is="item.icon" class="inline h-5 w-5 text-indigo-600 mx-1" style="vertical-align: -3.5px" aria-hidden="true" />
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
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon, TranslateIcon } from '@heroicons/vue/outline'
import { MoonIcon, HomeIcon, UserGroupIcon, SparklesIcon, InformationCircleIcon } from '@heroicons/vue/solid'

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
  },
  setup() {
    return {
      navigation,
    }
  },
  methods: {
    darkThemeSwitch() {
      const html = document.querySelector("html");
      if(localStorage.getItem('theme')=="dark"){
            html.classList.remove("dark");
            localStorage.setItem("theme", "white");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#F3F4F6");
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
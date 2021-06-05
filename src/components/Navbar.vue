<template>
    <div class="max-w-7xl mx-auto bg-white dark:bg-gray-800 fixed w-screen top-0">
      <div class="relative z-10 pb-3 bg-gray-100 dark:bg-gray-700 w-screen">

        <Popover>
          <div class="relative pt-3 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img class="h-8 w-auto sm:h-10" src="/favicon240.svg" alt="logo" />
                  </a>
                  <div class="flex items-center md:hidden">
                    <button
                      @click="darkThemeSwitch"
                      class="bg-white rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800">
                        <span class="sr-only">Theme</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /> </svg>
                    </button>
                    <PopoverButton class="bg-white rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300">{{ item.name }}</router-link>
                <button
                      @click="darkThemeSwitch"
                      class="align-text-top text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300 focus:outline-none">
                        <span class="sr-only">Theme</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /> </svg>
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
                    <router-link v :to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800">{{ item.name }}</router-link>
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
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Персонажи', href: '/characters' },
  { name: 'Хиличурлский', href: '/dictionary' },
  { name: 'Предметы', href: '/items' },
  { name: 'О нас', href: '/about' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
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
        }
        else{
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    },
  }
}
</script>
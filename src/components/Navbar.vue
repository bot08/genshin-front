<template>
<<<<<<< Updated upstream
    <div class="max-w-7xl mx-auto fixed w-screen top-0 z-40 hidden md:block">
      <div class="relative z-10 pb-3 bg-gray-50 dark:bg-gray-700 w-screen transition-colors shadow-sm">

        <Popover>
          <div class="relative pt-3 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between h-9 sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <router-link to="/">
                    <span class="sr-only">Logo</span>
                    <img class="h-8 w-8 sm:h-10 sm:w-10" src="/favicon.svg" alt="logo" />
                  </router-link>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-2 lg:pr-5 md:space-x-8">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50">
                  <component :is="item.icon" class="hidden lg:inline h-5 w-5 lg:mx-1" style="vertical-align: -3.5px" aria-hidden="true" />
                  {{ item.name }}
                </router-link>
                <button
                      @click="darkThemeSwitch"
                      class="align-text-top text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 focus:outline-none">
                        <span class="sr-only">Theme</span>
                        <MoonIcon class="h-5 w-5 dark:hidden" aria-hidden="true"/>
                        <SunIcon class="h-5 w-5 hidden dark:block" aria-hidden="true"/>
                </button>
              </div>
            </nav>
          </div>
        </Popover>
      </div>
    </div>

    <!-- Mobile nav -->
    <nav class="fixed md:hidden bottom-0 w-full border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 flex overflow-x-auto z-40">
      <router-link v-for="item in navigation" :key="item.name" v :to="item.href"
        class="flex flex-col flex-grow items-center justify-center
        overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
        ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 focus:text-orange-500">
        <component :is="item.icon" class="inline h-8 w-8 my-2.5 text-indigo-600 dark:text-gray-300 mx-1" style="vertical-align: -3.5px" aria-hidden="true" />
      </router-link>	
    </nav>
=======
<nav class="bg-white dark:bg-gray-700 fixed w-full z-40 shadow shadow-gray-300 w-100 px-8 md:px-auto hidden md:block transition-colors">
	<div class="md:h-16 h-28 mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
		<!-- Logo -->
		<div class="text-indigo-500 md:order-1">
      <img class="h-10 w-10" src="/favicon.svg" alt="logo" />
		</div>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-medium justify-between">
                <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 -->
				<router-link v-for="item in navigation" :key="item.name" v :to="item.href" class="px-3 lg:px-5 md:py-2 text-gray-600 dark:text-gray-200"><component :is="item.icon" class="hidden lg:inline h-5 w-5" style="vertical-align: -3.5px"/> {{ item.name }} </router-link>
			</ul>
		</div>
		<div class="order-2 md:order-3">
			<button  @click="darkThemeSwitch" type="button" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 dark:hover:bg-indigo-700 transition-colors text-gray-50 rounded-xl flex items-center gap-2">
                <span class="sr-only">Theme</span>
                <MoonIcon class="h-6 w-6 dark:hidden" aria-hidden="true"/>
                <SunIcon class="h-6 w-6 hidden dark:block" aria-hidden="true"/>
      </button>
		</div>
	</div>
</nav>

<nav class="fixed bottom-0 w-full border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 flex overflow-x-auto z-40 md:hidden">
	<router-link v-for="item in navigation" :key="item.name" v :to="item.href"
		class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 focus:text-orange-500">
		<component :is="item.icon" class="inline h-8 w-8 my-2.5 text-indigo-600 dark:text-gray-300 mx-1" style="vertical-align: -3.5px" aria-hidden="true" />
	</router-link>	
</nav>
>>>>>>> Stashed changes

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
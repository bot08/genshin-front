<template>
  <!-- Banner -->
  <div class="w-ful mt-1 mb-4 rounded-lg shadow-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 flex overflow-x-auto transition-colors" style="background-image: url('/img/ukr.png'); background-size: 3em; background-repeat: repeat">
    <a rel="noreferrer" target="_blank" href="https://i.ibb.co/HV8yVDb/dem-624abb99c6128.png" class="m-1 mx-auto text-base font-medium">Все буде Україна ❤</a>	
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <!-- Card -->
    <div v-for="item in menus" :key="item.name" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors sm:mx-auto sm:text-center sm:w-48">
        <router-link class="flex sm:block" v :to="item.href">
            <!-- Image loading -->
            <vue-load-image>
                <template v-slot:image>
                    <img class="w-20 h-20 sm:w-28 sm:h-28 sm:m-auto rounded-xl mx-3 my-3 sm:mb-0 drop-shadow" v :src="item.ico" alt="menu-ico">
                </template>
                <template v-slot:preloader> 
                    <div class="w-16 h-16 sm:w-24 sm:h-24 sm:m-auto rounded-2xl mx-5 my-5 sm:mb-1 sm:mt-3 bg-gray-200 dark:bg-gray-600 sm:mx-auto animate-pulse"></div>
                </template>
                <template v-slot:error>
                    <div class="w-16 h-16 sm:w-24 sm:h-24 sm:m-auto rounded-2xl mx-5 my-5 sm:mb-1 sm:mt-3 bg-red-200 dark:bg-red-800 sm:mx-auto animate-pulse text-center">img</div>
                </template>
            </vue-load-image>
            <!-- /Image -->
            <div class="px-3 py-1 my-auto">
                <h1 class="font-bold mb-1 sm:mt-1 sm:mb-2 text-xl">{{ item.name }}</h1>
            </div>
        </router-link>
    </div>
  </div>
</template>


<script>
import VueLoadImage from 'vue-load-image'

const menus = [
  { name: 'Персонажи', href: '/characters', ico: "/img/icon-ch.png" },
  { name: 'Хиличурлский', href: '/dictionary', ico: "/img/icon-bo.png" },
  { name: 'Молитвы', href: '/gacha', ico: "/img/icon-st.png" },
  { name: 'Предметы', href: '/items', ico: "/img/icon-it.png" },
  { name: 'Полезное', href: '/useful', ico: "/img/icon-us.png" },
  { name: 'Карта', href: '/map', ico: "/img/icon-im.png" },
  { name: 'О проекте', href: '/about', ico: "/img/icon-fr.png" },
]

export default {
  data: () => ({
    menus
  }),
  
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
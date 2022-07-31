<template>
    <!-- First section -->
    <h3 class="pb-2 px-1 sm:text-center sm:pb-5 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10 text-gray-900 dark:text-gray-200">
        Оружие
    </h3>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <!-- Card -->
    <div v-for="item in weapon" :key="item.name" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors sm:mx-auto sm:text-center sm:w-48">
        <a target="_blank" rel="noreferrer" class="flex sm:block" v :href="'https://genshin.honeyhunterworld.com/db/weapon/'+item.href+'/?lang=RU'">
            <!-- Image loading -->
            <LazyImage>
                <template v-slot:image>
                    <img class="w-20 h-20 sm:w-28 sm:h-28 sm:m-auto rounded-xl mx-3 my-3 sm:mb-0 drop-shadow" v :src="item.ico" alt="item-ico">
                </template>
                <template v-slot:preloader>
                    <div class="w-16 h-16 sm:w-24 sm:h-24 sm:m-auto rounded-2xl mx-5 my-5 sm:mb-1 sm:mt-3 bg-gray-200 dark:bg-gray-600 sm:mx-auto animate-pulse"></div>
                </template>
                <template v-slot:error>
                    <div class="w-16 h-16 sm:w-24 sm:h-24 sm:m-auto rounded-2xl mx-5 my-5 sm:mb-1 sm:mt-3 bg-red-200 dark:bg-red-800 sm:mx-auto animate-pulse text-center">img</div>
                </template>
            </LazyImage>
            <!-- /Image -->
            <div class="px-3 py-1 my-auto">
                <h1 class="font-bold mb-1 sm:mt-1 sm:mb-2 text-xl">{{ item.name }}</h1>
            </div>
        </a>
    </div>
  </div>



<!--
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
     //Preloader mirage
    <div v-for="n in 4" :key="n" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-auto sm:text-center sm:w-48">
        <div class="flex sm:block">
            <div class="w-20 h-20 sm:mx-auto rounded-3xl mx-3 my-3 sm:mb-0 sm:my-4 bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
            <div class="px-3 py-1 my-auto">
                <p class="h-6 my-4 bg-gray-200 dark:bg-gray-600 rounded w-28 sm:mx-auto animate-pulse"></p>
            </div>
        </div>
    </div>
  </div>
-->

</template>


<script>
// TODO сам контент
import LazyImage from '@/components/LazyImage.vue'

const weapon = [
  { name: 'Мечи', href: 'sword', ico: "/img/icon_sword.png" },
  { name: 'Двуруки', href: 'claymore', ico: "/img/icon_claymore.png" },
  { name: 'Копья', href: 'polearm', ico: "/img/icon_polearm.png" },
  { name: 'Луки', href: 'bow', ico: "/img/icon_bow.png" },
  { name: 'Катализаторы', href: 'catalyst', ico: "/img/icon_catalyst.png" },
]

/*
const another = [
  { name: 'Еда', href: '/food', ico: "/img/icon_food.png" },
  { name: 'Крафты', href: '/blacksmith', ico: "/img/icon_blacksmith.png" },
  { name: 'Алхимия', href: '/alchemy', ico: "/img/icon_alchemy.png" },
]
*/

export default {
  // Сохранение состояния (keep-alive)
  name: "notAlive",

  data: () => ({
    weapon,
    //another
  }),

  components: {
    LazyImage
  }
}
</script>
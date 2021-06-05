<template>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <!--Card-->
    <div v-for="item in characters" :key="item.name" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 sm:mx-auto justify-center text-center">
        <router-link v :to="item.href">
            <img class="w-48 sm:w-1/2 m-auto rounded-xl mt-4" v :src="item.ico" alt="char-portret">
            <div class="px-1 py-1">
                <div class="font-bold text-xl dark:text-gray-100">{{ item.name }}</div>
                <div class="text-lg mb-2 dark:text-gray-100">{{ item.rarity }}<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> </svg></div>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
const characters = [
  { name: 'Кэ Цин', rarity: '5', href: '/kequing', ico: "/img/charecters/kequing-ico.png" },
  { name: 'Кли', rarity: '5', href: '/klee', ico: "/img/charecters/klee-ico.png" },
  { name: 'Тарталья', rarity: '5', href: '/tartaglia', ico: "/img/charecters/tartaglia-ico.png" },
  { name: 'Сян Лин', rarity: '4', href: '/xiangling', ico: "/img/charecters/xiangling-ico.png" },


]
export default {
  setup() {
    return {
      characters,
    }
  },
}
</script>
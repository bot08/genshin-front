<template>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <!-- Card -->
    <div v-for="item in menus" :key="item.name" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-auto sm:justify-center sm:text-center sm:w-48">
        <router-link class="flex sm:block" v :to="item.href">
            <img class="w-20 h-20 sm:w-28 sm:h-28 sm:m-auto rounded-xl mx-3 my-3 sm:mb-0" v :src="item.ico" alt="char-portret">
            <div class="px-3 py-1 my-auto">
                <h1 class="font-bold mb-1 sm:mt-1 sm:mb-2 text-xl dark:text-gray-100">{{ item.name }}</h1>
            </div>
        </router-link>
    </div>
  </div>
</template>


<script>
const menus = [
  { name: 'Персонажи', href: '/characters', ico: "/img/icon-ch.png" },
  { name: 'Хиличурлский', href: '/dictionary', ico: "/img/icon-bo.png" },
  { name: 'Молитвы', href: '/gacha', ico: "/img/icon-st.png" },
  { name: 'Предметы', href: '/items', ico: "/img/icon-it.png" },
  { name: 'О проекте', href: '/about', ico: "/img/icon-fr.png" },
]

export default {
  setup() {
    return {
      menus
    }
  },
}
</script>
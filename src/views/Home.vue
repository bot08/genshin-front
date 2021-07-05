<template>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <!--Card-->
    <div v-for="item in menus" :key="item.name" class="rounded-lg mt-1 mb-4 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 sm:mx-auto sm:w-48 sm:h-40 justify-center text-center">
        <router-link v :to="item.href">
            <img class="w-48 h-48 sm:w-28 sm:h-28 m-auto" v :src="item.ico" alt="icon">
            <div class="px-1 py-1">
                <div class="font-bold text-xl mb-2 sm:mt-1 sm:mb-1 dark:text-gray-100">{{ item.name }}</div>
            </div>
        </router-link>
    </div>
  </div>
</template>


<script>
const menus = [
  { name: 'Персонажи', href: '/characters', ico: "/img/icon-ch.png" },
  { name: 'Хиличурлский', href: '/dictionary', ico: "/img/icon-bo.png" },
  { name: 'Предметы', href: '/items', ico: "/img/icon-it.png" },
  { name: 'Витая бездна', href: '/abyss', ico: "/img/icon-st.png" },
  { name: 'О нас', href: '/about', ico: "/img/icon-fr.png" },
]

export default {
  setup() {
    return {
      menus,
    }
  },
}
</script>
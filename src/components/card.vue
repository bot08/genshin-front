<template>
    <!--Card-->
    <div v-for="item in menus" :key="item.name" class="rounded-lg mt-1 mb-4 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 sm:mx-auto justify-center text-center">
        <router-link v :to="item.href">
            <img class="w-1/2 m-auto" v :src="item.ico" alt="icon">
            <div class="px-1 py-1">
                <div class="font-bold text-xl mb-2 dark:text-gray-100">{{ item.name }}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
const menus = [
  { name: 'Персонажи', href: '/characters', ico: "/img/icon-ch.png" },
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
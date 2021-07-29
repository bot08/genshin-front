<template>
    <!-- Select -->
  <Menu as="div" class="relative block text-left mb-3 w-40 ml-auto sm:mr-14 lg:mr-7">
      <!-- Button -->
    <div>
      <MenuButton class="inline-flex justify-center rounded-md shadow-lg px-4 py-2 transition duration-150 ease-in-out bg-indigo-600 hover:bg-indigo-500 dark:hover:bg-indigo-700 text-base font-medium text-white">
        Сортировка
        <ChevronDownIcon class="-mr-1 ml-1 h-6 w-6" aria-hidden="true" />
      </MenuButton>
    </div>

      <!-- pop panel -->
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="z-30 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-50 ring-1 dark:bg-gray-800 ring-black ring-opacity-5 focus:outline-none">
        <div v-for="item in sort" :key="item.name" class="py-1">
          <MenuItem>
            <button v @click="getContent(item.func)" class="text-gray-900 dark:text-gray-200 block px-3 py-2 text-md font-medium">{{ item.name }}</button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>

    <!--Preloader-->
  <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="n in 16" :key="n" class="flex sm:block rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-auto sm:justify-center sm:text-center sm:w-60">
          <div class="w-20 h-24 bg-gray-200 dark:bg-gray-600 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-4 animate-pulse"></div>
            <div class="px-1 animate-pulse">
              <p class="h-6 mt-5 sm:mt-0 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-32 sm:mx-auto"></p>
              <p class="h-5 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-9 sm:mx-auto"></p>
            </div>
      </div>
  </div>

    <!--Card-->
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div v-for="item in characters" :key="item.name" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-auto sm:justify-center sm:text-center sm:w-60">
        <router-link class="flex sm:block" v :to="'/characters/'+item.nameeng">
            <img class="w-28 h-28 sm:mx-auto rounded-xl mx-3 my-3 sm:mt-2 sm:mb-0" v :src="'https://sushicat.pp.ua/api'+item.ico.path" alt="char-portret">
            <div class="px-1 py-1">
                <div class="font-bold mt-3 sm:mt-0 text-xl dark:text-gray-100">{{ item.name }}</div>
                <div class="text-lg mb-1 dark:text-gray-100">{{ item.rarity }}<StarIcon class="h-5 w-5 inline" style="vertical-align: -3.5px"/></div>
            </div>
        </router-link>
    </div>
  </div>

    <!-- Server error -->
  <Error v-if="error"/>
</template>

<script>
import axios from 'axios'
import Error from '@/components/Error.vue'
import { StarIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

// Менюшка выбора
const sort = [
  { name: 'От редких к менее', func: 'f5to4'},
  { name: 'От менее редких', func: 'f4to5'},
  { name: 'По алфавиту', func: 'alf'},
  { name: 'С конца алфавита', func: 'alf2'},
  { name: 'По стихиям', func: 'eye'},
  { name: 'По ID в БД', func: 'id'},
]

export default {

  components: {
    StarIcon,
    Error,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon
  },

  data: () => ({
    loading: true,
    characters: [],
    error: false,
    sort
  }),

  created(){
    // При старте страницы
    this.getContent('f5to4')
  },

  methods: {
    clean(){
      this.loading = true;
      this.error = false;
      this.characters = [];
    },

    getContent(ass){
      this.clean();
      let url
      // Тут задаем новые URL запросы
      switch(ass){
        case 'f5to4': url = 'https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[rarity]=-1&token=a4191046104f8f3674f788e804c2d0';
          break;
        case 'f4to5': url = 'https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[rarity]=1&token=a4191046104f8f3674f788e804c2d0';
          break;
        case 'alf': url = 'https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[name]=1&token=a4191046104f8f3674f788e804c2d0';
          break;
        case 'alf2': url = 'https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[name]=-1&token=a4191046104f8f3674f788e804c2d0';
          break;
        case 'eye': url = 'https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[eye]=1&token=a4191046104f8f3674f788e804c2d0';
          break;
        case 'id': url = 'https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?token=a4191046104f8f3674f788e804c2d0';
          break;
      }

      axios.get(url)
      .then(response => {
        this.loading = false;
        this.characters = response.data.entries;
      })
      .catch(e => {
        this.loading = false;
        this.error = true;
      })
    }

  }
}
</script>
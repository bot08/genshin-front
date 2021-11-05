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

      <!-- Preloader -->
      <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-2 mt-1">
        <div v-for="n in 6" :key="n" class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-4 justify-center">
            <div class="h-32 w-64 sm:h-60 sm:w-96 lg:h-48 mx-auto rounded-xl mt-4 shadow-sm bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
            <p class="h-6 mt-4 ml-2 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-72 animate-pulse"></p>
            <p class="h-5 mt-3 ml-2 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-52 animate-pulse"></p>
            <p class="h-5 mt-1 ml-2 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-40 animate-pulse"></p>
            <p class="h-5 mt-1 ml-2 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-44 animate-pulse"></p>
            <p class="h-5 mt-1 ml-2 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-48 animate-pulse"></p>
        </div>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 mt-1">
        <div v-for="item in banners" :key="item.name" class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-4 justify-center">
            <!-- Image loading -->
            <vue-load-image>
                <template v-slot:image>
                    <img class="h-32 sm:h-60 lg:h-48 w-auto mx-auto rounded-xl mt-4 shadow-sm object-cover" v :src="'https://sushicat.pp.ua/api'+item.img.path" alt="banner">
                </template>
                <template v-slot:preloader> 
                    <div class="h-32 w-64 sm:h-60 sm:w-96 lg:h-48 mx-auto rounded-xl mt-4 shadow-sm bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                </template>
                <template v-slot:error>
                    <div class="h-32 w-64 sm:h-60 sm:w-96 lg:h-48 mx-auto rounded-xl mt-4 shadow-sm bg-red-200 dark:bg-red-800 animate-pulse text-center">Ошибка</div>
                </template>
            </vue-load-image>
            <!-- /Image -->
            <h3 class="pb-1 pt-2 ml-2 text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:leading-10 dark:text-gray-200">
              {{ item.name }} ({{ item.ver }})
            </h3>
              <p v-if="item.ch5star" class="ml-2 text-xl dark:text-gray-100">{{ item.ch5star }} 5<StarIcon class="h-5 w-5 inline" style="vertical-align: -3.5px"/></p>
                <p v-if="item.ch4star1" class="ml-2 text-xl dark:text-gray-100">{{ item.ch4star1 }} 4<StarIcon class="h-5 w-5 inline" style="vertical-align: -3.5px"/></p>
                <p v-if="item.ch4star2" class="ml-2 text-xl dark:text-gray-100">{{ item.ch4star2 }} 4<StarIcon class="h-5 w-5 inline" style="vertical-align: -3.5px"/></p>
                <p v-if="item.ch4star3" class="ml-2 mb-1 text-xl dark:text-gray-100">{{ item.ch4star3 }} 4<StarIcon class="h-5 w-5 inline" style="vertical-align: -3.5px"/></p>
        </div>
      </div>

    <!-- Server error -->
    <Error v-if="error"/>
</template>


<script>
import axios from 'axios'
import VueLoadImage from 'vue-load-image'
import Error from '@/components/Error.vue'
import { StarIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

// Менюшка выбора
const sort = [
  { name: 'От новых', func: 'fromnew'},
  { name: 'От старых', func: 'fromold'},
  { name: 'По алфавиту', func: 'alf'},
  { name: 'С конца алфавита', func: 'alf2'}
]


export default {
  components: {
    'vue-load-image': VueLoadImage,
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
    banners: [],
    error: false,
    sort
  }),

  created(){
    // Проверяем есть ли сохранённый ответ (на обовляемость забиваем)
    if(sessionStorage.getItem("banners-save") == null){
        // Если нет, то выполняем функцию
        this.getContent('fromnew');    
    }else{
        // Иначе просто указывам то что было прошлый раз в response.data.entries
        this.banners = JSON.parse(sessionStorage.getItem("banners-save"));
        this.loading = false;
    }
  },

  methods: {
    clean(){
      this.loading = true;
      this.error = false;
      this.banners = [];
    },

    getContent(sortname){
      this.clean();
      let apisort
      // Тут задаем сортировку для api (так указываем нужное значение для самого АПИ. Не путать sortname и apisort)
      switch(sortname){
        case 'fromnew': apisort = '[_id]=-1';
          break;
        case 'fromold': apisort = '[_id]=1';
          break;
        case 'alf': apisort = '[name]=1';
          break;
        case 'alf2': apisort = '[name]=-1';
          break;
      }

      axios.get('https://sushicat.pp.ua/api/genshin/api/collections/get/gacha?sort'+apisort+'&token=a4191046104f8f3674f788e804c2d0')
      .then(response => {
        this.banners = response.data.entries;
        sessionStorage.setItem("banners-save", JSON.stringify(response.data.entries));
      })
      .catch(e => {
        this.error = true;
      })
      .finally(() => (this.loading = false));
    }
    
  }

}
</script>
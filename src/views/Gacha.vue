<template>
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
                    <img class="h-32 sm:h-60 lg:h-48 w-auto mx-auto rounded-xl mt-4 shadow-sm" v :src="'https://sushicat.pp.ua/api'+item.img.path" alt="banner">
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
import { StarIcon } from '@heroicons/vue/solid'


export default {
  components: {
    'vue-load-image': VueLoadImage,
    StarIcon,
    Error
  },

  data: () => ({
    loading: true,
    banners: [],
    error: false
  }),

  created(){
    axios.get('https://sushicat.pp.ua/api/genshin/api/collections/get/gacha?sort[_created]=-1&token=a4191046104f8f3674f788e804c2d0')
    .then(response => {
      this.banners = response.data.entries;
    })
    .catch(e => {
      this.error = true;
    })
    .finally(() => (this.loading = false));
  }
}
</script>
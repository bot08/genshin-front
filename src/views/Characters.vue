<template>
    <!--Preloader-->
  <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="n in 16" :key="n" class="flex sm:block rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-auto sm:justify-center sm:text-center animate-pulse sm:w-60">
          <div class="w-20 h-24 bg-gray-200 dark:bg-gray-600 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-4"></div>
            <div class="px-1">
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
// TODO кастомная сортировка
import axios from 'axios'
import Error from '@/components/Error.vue'
import { StarIcon } from '@heroicons/vue/solid'


export default {
  components: {
    StarIcon,
    Error
  },

  data: () => ({
    loading: true,
    characters: [],
    error: false
  }),

  created(){
    axios.get('https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[rarity]=-1&token=a4191046104f8f3674f788e804c2d0')
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
</script>
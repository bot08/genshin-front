<template>
  <!-- Select -->
  <SelectMenu :sortProps='sort' @updContent='getContent'/>

  <!--Preloader-->
  <div v-if="loading" class="min-h-screen">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="n in 16" :key="n" class="flex sm:block rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 sm:mx-auto sm:w-60">
            <div class="w-20 h-24 bg-gray-200 dark:bg-gray-600 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-4 animate-pulse"></div>
              <div class="px-1 animate-pulse">
                <p class="h-6 mt-5 sm:mt-0 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-32 sm:mx-auto"></p>
                <p class="h-5 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-9 sm:mx-auto"></p>
              </div>
        </div>
    </div>
  </div>

  <!--Card-->
  <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div v-for="item in characters" :key="item.name" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors sm:mx-auto sm:text-center sm:w-60">
        <router-link class="flex sm:block" v :to="'/characters/'+item.nameeng">
            <!-- Image loading -->
            <LazyImage>
                <template v-slot:image>
                    <img class="w-28 h-28 sm:mx-auto rounded-xl mx-3 my-3 sm:mt-2 sm:mb-0 drop-shadow" v :src="'https://sushicat.pp.ua/api'+item.ico.path" alt="char-portret">
                </template>
                <template v-slot:preloader> 
                    <div class="w-20 h-24 bg-gray-200 dark:bg-gray-600 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-3 animate-pulse"></div>
                </template>
                <template v-slot:error>
                    <div class="w-20 h-24 bg-red-200 dark:bg-red-800 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-3 animate-pulse text-center">img</div>
                </template>
            </LazyImage>
            <!-- /Image -->
            <div class="px-1 py-1">
                <div class="font-bold mt-3 sm:mt-0 text-xl">{{ item.name }}</div>
                <div class="text-lg mb-1">{{ item.rarity }}<StarIcon class="h-5 w-5 inline v-align-min3-5"/></div>
            </div>
        </router-link>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import LazyImage from '@/components/LazyImage.vue'
import { StarIcon } from '@heroicons/vue/solid'

import { defineAsyncComponent } from 'vue'
import SelectMenuLoader from '@/components/SelectMenuLoader.vue'

const SelectMenu = defineAsyncComponent({
  loader: () => import('@/components/SelectMenu.vue'),
  loadingComponent: SelectMenuLoader,
  delay: 0,
  //errorComponent: Error,
  //timeout: 5000
})

// Менюшка выбора
const sort = [
  { name: 'От редких к менее', query: '[rarity]=-1' },
  { name: 'От менее редких', query: '[rarity]=1' },
  { name: 'По алфавиту', query: '[name]=1' },
  { name: 'С конца алфавита', query: '[name]=-1' },
  { name: 'По стихиям', query: '[eye]=1' },
  { name: 'По ID в БД', query: '[_id]=1' },
]

export default {

  components: {
    LazyImage,
    StarIcon,
    Error,
    SelectMenu
  },

  data: () => ({
    loading: true,
    characters: [],
    sort
  }),

  created(){
    this.getContent('[rarity]=-1');      
  },

  methods: {
    getContent(apiSort){
      this.loading = true;

      axios.get('/api/collections/get/charactersv2?sort'+apiSort+'&fields[name]=1&fields[nameeng]=1&fields[rarity]=1&fields[ico]=1&token=a4191046104f8f3674f788e804c2d0')
      .then(response => {
        this.characters = response.data.entries;
        this.loading = false;
      })
      .catch(() => {
        // try until the server gives the answer
        setTimeout(() => this.getContent(apiSort), 999);
      })
    }

  }
}
</script>
<template>
    <!--Preloader-->
  <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="n in 16" :key="n" class="flex sm:block rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 sm:mx-auto sm:justify-center sm:text-center animate-pulse sm:w-60">
          <div class="w-20 h-24 bg-gray-200 dark:bg-gray-600 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-4"></div>
            <div class="px-1">
              <p class="h-6 mt-5 sm:mt-0 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-32 sm:mx-auto"></p>
              <p class="h-5 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-10 sm:mx-auto"></p>
            </div>
      </div>
  </div>

    <!--Card-->
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div v-for="item in characters" :key="item.name" class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 sm:mx-auto sm:justify-center sm:text-center sm:w-60">
        <router-link class="flex sm:block" v :to="'/characters/'+item.nameeng">
            <img class="w-28 h-28 sm:mx-auto rounded-xl mx-3 my-3 sm:mt-2 sm:mb-0" v :src="'https://sushicat.pp.ua/api/'+item.ico.path" alt="char-portret">
            <div class="px-1 py-1">
                <div class="font-bold mt-3 sm:mt-0 text-xl dark:text-gray-100">{{ item.name }}</div>
                <div class="text-lg mb-1 dark:text-gray-100">{{ item.rarity }}<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor" style="vertical-align: -3.4px"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> </svg></div>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
// TODO кастомная сортировка
import axios from 'axios'


export default {
  data: () => ({
    loading: true,
    characters: [],
    errors: []
  }),

  created(){
    axios.get('https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[rarity]=-1&token=a4191046104f8f3674f788e804c2d0')
    .then(response => {
      this.loading = false;
      this.characters = response.data.entries;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
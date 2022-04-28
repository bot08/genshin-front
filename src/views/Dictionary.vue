<template>
    <!-- Select -->
    <SelectMenu :sortProps='sort' @updContent='getContent'/>

    <!-- Preloader -->
    <div v-if="loading" class="min-h-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="n in 16" :key="n" class="p-3 rounded-lg shadow-lg mb-3 mt-1 md:mb-8 sm:mx-4 bg-gray-50 dark:bg-gray-700">
            <p class="h-6 mb-3 mt-1 bg-gray-200 dark:bg-gray-600 rounded w-32 animate-pulse"></p>
            <p class="h-4 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-24 animate-pulse"></p>
            <p class="h-4 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-60 animate-pulse"></p>
            <p class="h-4 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-52 animate-pulse"></p>
            <p class="hidden md:block h-4 mb-3 bg-gray-200 dark:bg-gray-600 rounded w-24 animate-pulse"></p>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="item in dictionary" :key="item.word" class="p-3 rounded-lg shadow-lg mb-3 mt-1 md:mb-8 sm:mx-4 bg-gray-50 dark:bg-gray-700 transition-colors" style="white-space: pre-line">
            <p class="text-3xl font-extrabold leading-9 tracking-tight sm:leading-10 text-gray-900 dark:text-gray-200">{{ item.word }}</p>
            <p class="text-md dark:text-gray-200">{{ item.translate }}</p>
            <p class="text-md dark:text-gray-200">{{ item.subinf }}</p>
            <p class="text-md text-gray-500 dark:text-gray-300">{{ item.original }}</p>
        </div>
    </div>

    <!-- Server error -->
    <Error v-if="error"/>

    <!-- Sourse -->
    <p class="text-md text-center text-gray-400 pb-4">Информация с <a class="text-gray-500 dark:text-gray-300" rel="noreferrer" target="_blank" href="https://github.com/SpeedyOrc-C/Hilipedia">Hilipedia</a></p>
</template>


<script>
import axios from 'axios'
import Error from '@/components/Error.vue'

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
  { name: 'По алфавиту', query: '[word]=1' },
  { name: 'С конца алфавита', query: '[word]=-1' },
  { name: 'Имеют оригинал', query: '[word]=1&filter[original]=true' },
]

export default {
  components: {
    Error,
    SelectMenu
  },

  data: () => ({
    loading: true,
    dictionary: [],
    error: false,
    sort
  }),

  created(){
    this.getContent('[word]=1');     
  },

   methods: {
    getContent(apiSort){
      this.loading = true;
      this.error = false;
      
      axios.get('/api/collections/get/dict?sort'+apiSort+'&token=a4191046104f8f3674f788e804c2d0')
      .then(response => {
        this.dictionary = response.data.entries;
      })
      .catch(e => {
        this.error = true;
      })
      .finally(() => (this.loading = false));
    }

  }
}
</script>
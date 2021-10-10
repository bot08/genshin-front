<template>
        <!-- 
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-1">
            <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-4 justify-center">
                <table class="table-auto border-collapse border w-full mt-2">
                    <tbody>
                        <tr v-for="info in characters_up" :key="info.lvl" class="dark:text-gray-100">
                            <th class="border border-blue-800">{{ info.lvl }}</th>
                            <th class="border border-blue-800">{{ info.books }}</th>
                            <th class="border border-blue-800">{{ info.lostexp }}</th>
                            <th class="border border-blue-800">{{ info.mora }}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
        -->

     <header class="bg-gray-50 shadow-lg mx-auto text-center max-w-lg mt-1 pt-2 rounded-lg dark:bg-gray-700 transition-colors">
        <!-- Image loading -->
            <vue-load-image>
              <template v-slot:image>
                  <img class="h-28 md:h-40 w-auto mx-auto rounded-xl mt-2" src="/img/paimon-work.gif" alt="paimon-work">
              </template>
              <template v-slot:preloader> 
                  <div class="mt-2 w-28 h-28 mx-auto pt-8 md:h-40 md:pt-20">
                    <svg class="mx-auto animate-spin text-spin text-gray-400 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spin"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  </div>
              </template>
              <template v-slot:error>
                  <div></div>
              </template>
          </vue-load-image>
        <!-- /Image -->
        <div class="max-w-7xl mx-auto pb-5 pt-4 px-3 sm:px-4 lg:px-5">
            <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-200">Работаем...</h1>
            <p class="dark:text-gray-300">В следующем обновлении будет</p>
            <router-link to="/" class="inline-flex items-center justify-center mt-3 px-5 py-2 shadow-lg text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">
                На главную
            </router-link>
        </div>
    </header>
</template>


<script>
import VueLoadImage from 'vue-load-image'

const characters_up = [
  { lvl: '0-20', books: [6, null, 1], lostexp: 825, mora: 24000 },
  { lvl: '20-40', books: [28, 3, 4], lostexp: 675, mora: 115600 },
]

export default {
    setup() {
        return{
            characters_up
        }
    },
    components: {
        'vue-load-image': VueLoadImage
    }
}
</script>
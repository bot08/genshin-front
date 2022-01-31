<template>
    <div class="flex items-center mb-6 justify-center">

        <!-- Back btns -->
        <div v-if="pageProps == 0" class="flex items-center text-base font-medium px-4 py-2 dark:bg-gray-800 bg-gray-200 text-gray-600 dark:text-gray-400 rounded-lg shadow-lg transition-colors">
            <ChevronLeftIcon class="mr-1 h-6 w-6" aria-hidden="true" />
            Сюда
        </div>

        <button v-else v @click="this.$emit('updPage', -1)" class="flex items-center text-base font-medium px-4 py-2 dark:bg-gray-700 bg-gray-50 dark:text-gray-100 rounded-lg shadow-lg transition-colors">
            <ChevronLeftIcon class="mr-1 h-6 w-6" aria-hidden="true" />
            Сюда
        </button>

        <!-- Сounter -->
        <p class="text-md font-medium px-4 py-2 text-gray-700 dark:text-gray-100 rounded-md ">
            {{ pageProps+1 }}
        </p>

        <!-- Forward btns -->
        <button v-if="totalProps/pageLimitProps <= pageProps+1" class="flex items-center text-base font-medium px-4 py-2 dark:bg-gray-800 bg-gray-200 text-gray-600 dark:text-gray-400 rounded-lg shadow-lg transition-colors">
            Туда
            <ChevronRightIcon class="ml-1 h-6 w-6" aria-hidden="true" />
        </button>

        <button v-else v @click="this.$emit('updPage', 1)" class="flex items-center text-base font-medium px-4 py-2 dark:bg-gray-700 bg-gray-50 dark:text-gray-100 rounded-lg shadow-lg transition-colors">
            Туда
            <ChevronRightIcon class="ml-1 h-6 w-6" aria-hidden="true" />
        </button>
    </div>
</template>


<script>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/outline"


export default {
  name: "Pagination",

  props:[
    'pageProps',
    'totalProps',
    'pageLimitProps'
  ],
  
  components: {
    ChevronRightIcon,
    ChevronLeftIcon
  }
}
</script>
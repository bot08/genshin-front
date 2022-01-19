<template>
    <div class="flex items-center mb-6 justify-center">
        <button v @click="this.$emit('updPage', -1)" class="flex items-center text-base font-medium px-4 py-2 dark:bg-gray-700 bg-gray-50 dark:text-gray-100 rounded-lg shadow-lg transition-colors">
            <ChevronLeftIcon class="mr-1 h-6 w-6" aria-hidden="true" />
            Сюда
        </button>

        <p class="px-4 py-2 text-gray-700 dark:text-gray-100 rounded-md ">
            {{ PageProps+1 }}
        </p>

        <button v @click="this.$emit('updPage', 1)" class="flex items-center text-base font-medium px-4 py-2 dark:bg-gray-700 bg-gray-50 dark:text-gray-100 rounded-lg shadow-lg transition-colors">
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
    'PageProps'
  ],

  components: {
    ChevronRightIcon,
    ChevronLeftIcon
  }

}
</script>
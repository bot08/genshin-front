<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="mb-4 sm:mx-3" v-for="item in dictionary" :key="item.word">
            <p class="text-3xl font-bold dark:text-gray-100">{{ item.word }}</p>
            <p class="text-md dark:text-gray-100">{{ item.translate }}</p>
            <p class="text-md dark:text-gray-100">{{ item.subinf }}</p>
            <p class="text-md text-gray-400">{{ item.original }}</p>
        </div>
    </div>
    <p class="text-md text-center text-gray-300 dark:text-gray-400 pb-4">Информация с <a class="text-gray-400 dark:text-gray-300" target="_blank" href="https://github.com/SpeedyOrc-C/Hilipedia">Hilipedia</a></p>
</template>


<script>
import {dictionary} from "../data/dict.js"

export default {
  setup() {
    return {
      dictionary,
    }
  },
}
</script>
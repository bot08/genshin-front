<template>
    <div class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-auto sm:text-center sm:w-60">
        <router-link class="flex sm:block" v :to="'/characters/'+nameEngProps">
            <!-- Image loading -->
            <vue-load-image>
                <template v-slot:image>
                    <img class="w-28 h-28 sm:mx-auto rounded-xl mx-3 my-3 sm:mt-2 sm:mb-0 object-cover drop-shadow" v :src="'https://sushicat.pp.ua/api'+icoProps" alt="char-portret">
                </template>
                <template v-slot:preloader> 
                    <div class="w-20 h-24 bg-gray-200 dark:bg-gray-600 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-3 animate-pulse"></div>
                </template>
                <template v-slot:error>
                    <div class="w-20 h-24 bg-red-200 dark:bg-red-800 sm:mx-auto rounded-xl mx-7 my-5 sm:mt-3 sm:mb-3 animate-pulse text-center">img</div>
                </template>
            </vue-load-image>
            <!-- /Image -->
            <div class="px-1 py-1">
                <div class="font-bold mt-3 sm:mt-0 text-xl dark:text-gray-100">{{ nameProps }}</div>
                <div class="text-lg mb-1 dark:text-gray-100">{{ rarityProps }}<StarIcon class="h-5 w-5 inline v-align-min3-5"/></div>
            </div>
        </router-link>
    </div>
</template>


<script>
import VueLoadImage from 'vue-load-image'
import { StarIcon } from '@heroicons/vue/solid'


export default {
    name: "CharactersCard",

    props:[
        'nameProps',
        'nameEngProps',
        'icoProps',
        'rarityProps'
    ],

    components: {
    'vue-load-image': VueLoadImage,
    StarIcon
  },
}
</script>
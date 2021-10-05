<template>
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
</template>

<script>
import VueLoadImage from 'vue-load-image'

const characters_up = [
  { lvl: '0-20', books: [6, null, 1], lostexp: 825, mora: 24000 },
  { lvl: '20-40', books: [11, 1, 3], lostexp: 825, mora: 24000 },
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
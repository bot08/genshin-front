<template>
    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-1">

        <!-- Card1 -->
        <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-4">
            <!-- Card-content -->
            <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10">
                Прокачка героя
            </h3>
            <hr class="mb-2 border-gray-200 dark:border-gray-500">
            
            <div v-for="info in characters_up" :key="info.lvl">
                <b class="text-lg">Уровень {{ info.lvl }}:</b>
                <br>

                Предметы:
                <b v-for="n in 3" :key="n" class="inline-flex my-1">
                    {{ info.books[n-1] }} 
                        <!-- Icon loading -->
                            <vue-load-image v-if="info.books[n-1]">
                                <template v-slot:image>
                                    <img class="h-6 w-6 mr-2" v :src="'/img/exp'+(4-n)+'.png'" alt="book-icon">
                                </template>
                                <template v-slot:preloader> 
                                    <div class="h-4 w-4 m-1 mr-3 rounded-md bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                                </template>
                                <template v-slot:error>
                                    <div class="h-4 w-4 m-1 mr-2 rounded-md bg-red-200 dark:bg-red-800 animate-pulse"></div>
                                </template>
                            </vue-load-image>
                        <!-- /Icon -->
                </b>
                <br>

                Потеряно EXP:
                <b class="inline-flex my-1">
                {{ info.lostexp }} 
                    <!-- Icon loading -->
                        <vue-load-image>
                            <template v-slot:image>
                                <img class="h-6 w-6 mr-2" src="/img/exp-icon.png" alt="exp-icon">
                            </template>
                            <template v-slot:preloader> 
                                <div class="h-4 w-4 m-1 mr-2 rounded-md bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                            </template>
                            <template v-slot:error>
                                <div class="h-4 w-4 m-1 mr-2 rounded-md bg-red-200 dark:bg-red-800 animate-pulse"></div>
                            </template>
                        </vue-load-image>
                    <!-- /Icon -->
                </b>
                <br>

                Стоимость:
                <b class="inline-flex my-1">
                {{ info.mora }} 
                    <!-- Icon loading -->
                        <vue-load-image>
                            <template v-slot:image>
                                <img class="h-6 w-6 mr-2" src="/img/mora-icon.png" alt="mora-icon">
                            </template>
                            <template v-slot:preloader> 
                                <div class="h-4 w-4 m-1 mr-2 rounded-md bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                            </template>
                            <template v-slot:error>
                                <div class="h-4 w-4 m-1 mr-2 rounded-md bg-red-200 dark:bg-red-800 animate-pulse"></div>
                            </template>
                        </vue-load-image>
                    <!-- /Icon -->
                </b>
                <br>
                <hr class="my-1 border-gray-200 dark:border-gray-500">

            </div>
        </div>
        <!-- /Card1 -->

        <!-- Card2 -->
        <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-4">
            <!-- Card-content -->
            <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10">
                Расчет смолы
            </h3>
            <hr class="mb-2 border-gray-200 dark:border-gray-500">
            
            <div v-for="res in resin" :key="res.amount">
                <div class="inline-flex w-full justify-between">
                    <b class="text-lg inline-flex">0 -> {{ res.amount }}
                        <!-- Icon loading -->
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="h-6 w-6 mr-2 mt-0.5" src="/img/resin-icon.png" alt="resin-icon">
                                </template>
                                <template v-slot:preloader> 
                                    <div class="h-4 w-4 m-1 mr-2 mt-1.5 rounded-md bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                                </template>
                                <template v-slot:error>
                                    <div class="h-4 w-4 m-1 mr-2 mt-1.5 rounded-md bg-red-200 dark:bg-red-800 animate-pulse"></div>
                                </template>
                            </vue-load-image>
                        <!-- /Icon -->
                    </b>
                    <b class="mr-2">{{ res.wait }} час.</b>
                </div>
                <br>
                <hr class="my-2 border-gray-200 dark:border-gray-500">
            
            </div>
        </div>
        <!-- /Card2 -->

        <!-- Card3 -->
        <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:mx-4">
            <!-- Card-content -->
            <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10">
                Цены на донат
            </h3>
            <hr class="mb-2 border-gray-200 dark:border-gray-500">
            
            <div v-for="donat in donate" :key="donat.name">
                <div class="inline-flex w-full justify-between">
                        <!-- Icon loading -->
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="h-10 w-10 mr-5 mt-2" v :src="'/img/'+donat.icon+'.png'" alt="donate-icon">
                                </template>
                                <template v-slot:preloader> 
                                    <div class="h-10 w-10 mr-3 mt-2 rounded-lg bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                                </template>
                                <template v-slot:error>
                                    <div class="h-10 w-10 mr-3 mt-2 rounded-lg bg-red-200 dark:bg-red-800 animate-pulse"></div>
                                </template>
                            </vue-load-image>
                        <!-- /Icon -->
                    <b class="text-lg my-auto inline-flex">{{ donat.name }}</b>
                    <b class="mr-2 sm:ml-1 my-auto">{{ donat.cost }}$</b>
                </div>
                <br>
                <hr class="my-2 border-gray-200 dark:border-gray-500">
            
            </div>

            <!-- Price info -->
            <p class="text-md text-center text-gray-500 dark:text-gray-300 my-2">Цены могут отличаться в зависимости от региона</p>
            <hr class="my-2 border-gray-200 dark:border-gray-500">
            
            <!-- Sourse -->
            <p class="text-md text-center text-gray-600 dark:text-gray-200 my-2"><a rel="noreferrer" target="_blank" href="https://webstatic-sea.mihoyo.com/payment/genshin/index.html">Пополнять тут</a></p>
        </div>
        <!-- /Card3 -->
    </div>
</template>


<script>
import VueLoadImage from 'vue-load-image'

const characters_up = [
  { lvl: '0-20', books: [6, null, 1], lostexp: 825, mora: 24000 },
  { lvl: '20-40', books: [28, 3, 4], lostexp: 675, mora: 115600 },
  { lvl: '40-50', books: [29, null, null], lostexp: 900, mora: 115800 },
  { lvl: '50-60', books: [42, 3, null], lostexp: 875, mora: 170800 },
  { lvl: '60-70', books: [59, 3, 1], lostexp: 75, mora: 239000 },
  { lvl: '70-80', books: [80, 2, 2], lostexp: 125, mora: 322200 },
  { lvl: '80-90', books: [171, 4, null], lostexp: 875, mora: 684600 }
]

const resin = [
  { amount: 15, wait: 2 },
  { amount: 30, wait: 4 },
  { amount: 45, wait: 6 },
  { amount: 60, wait: 8 },
  { amount: 75, wait: 10 },
  { amount: 90, wait: 12 },
  { amount: 105, wait: 14 },
  { amount: 120, wait: 16 },
  { amount: 145, wait: 19 },
  { amount: 160, wait: 21 }
]

const donate = [
  { name: "Благословение полой луны", cost: 4.99, icon: "welkinmoon" },
  { name: "Кристаллов Сотворения ×60", cost: 0.99, icon: "donate1" },
  { name: "Кристаллов Сотворения ×300", cost: 4.99, icon: "donate2" },
  { name: "Кристаллов Сотворения ×980", cost: 14.99, icon: "donate3" },
  { name: "Кристаллов Сотворения ×1980", cost: 29.99, icon: "donate4" },
  { name: "Кристаллов Сотворения ×3280", cost: 49.99, icon: "donate5" },
  { name: "Кристаллов Сотворения ×6480", cost: 99.99, icon: "donate6" },
]

export default {
    data: () => ({
        characters_up,
        resin,
        donate
    }),

    components: {
        'vue-load-image': VueLoadImage
    }
}
</script>
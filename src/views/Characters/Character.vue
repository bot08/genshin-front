<template>
  <!--Preloader-->
  <div v-if="loading">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden mx-auto">
          <div class="h-80 sm:h-96 mx-auto mt-3 pt-28">
              <svg class="mx-auto text-gray-400 h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spin"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle></svg>
          </div>
      </div>

      <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:m-4">
          <h3 class="pb-2 pt-3">
            <p class="h-8 mb-1 mt-1 bg-gray-200 dark:bg-gray-600 rounded w-40 animate-pulse"></p>
          </h3>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-36 animate-pulse"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-32 animate-pulse"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-52 animate-pulse"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-36 animate-pulse"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-64 animate-pulse"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-44 animate-pulse"></p>
          <p class="h-5 mt-1 bg-gray-200 dark:bg-gray-600 rounded w-60 animate-pulse"></p>
      </div>

      <div class="px-4 pb-2 rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:m-4 md:col-span-2 lg:col-span-1">
          <h3 class="pb-2 pt-3">
            <p class="h-8 mb-1 mt-1 bg-gray-200 dark:bg-gray-600 rounded w-36 animate-pulse"></p>
          </h3>
        <div v-for="n in 9" :key="n">
            <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-100 animate-pulse"></p>
        </div>
            <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-44 animate-pulse"></p>
      </div>
    </div>
  </div>

  <!--Content-->
  <div v-if="character">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden mx-auto text-center">
          <!-- Image loading -->
            <LazyImage>
              <template v-slot:image>
                  <img class="h-80 sm:h-96 mx-auto mt-3 drop-shadow" v :src="'https://sushicat.pp.ua/api'+character.portrait.path" alt="char-portret">
              </template>
              <template v-slot:preloader> 
                  <div class="h-80 sm:h-96 mx-auto mt-3 pt-28">
                    <svg class="mx-auto animate-spin text-spin text-gray-400 h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spin"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  </div>
              </template>
              <template v-slot:error>
                  <div class="h-80 sm:h-96 mx-auto mt-3 pt-28"></div>
              </template>
            </LazyImage>
          <!-- /Image -->
      </div>

      <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:m-4">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10">
            {{ character.name }}
          </h3>
          <p>
          <b>Редкость:</b> {{ character.rarity }}<StarIcon class="h-5 w-5 inline v-align-min3-5"/></p>
          <p>
          <b>Оружие:</b> {{ character.weapon }}</p>
          <p>
          <b>Глаз Бога:</b> {{ character.eye }}</p>
          <p v-if="character.fullname">
          <b>Полное имя:</b> {{ character.fullname }}</p>
          <p>
          <b>Пол:</b> {{ character.gender }}</p>
          <p>
          <b>День рождения:</b> {{ character.birthday }}</p>
          <p>
          <b>Регион:</b> {{ character.region }}</p>
          <p>
          <b>Принадлежность:</b> {{ character.affiliation }}</p>
      </div>

      <div class="px-4 pb-2 rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:m-4 md:col-span-2 lg:col-span-1">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10">
            Описание
          </h3>
          {{ character.desk }}
      </div>
    </div>
  </div>

  <!-- 404 Error -->
  <NotFound  v-if="error"/>
</template>


<script>
// TODO Обрезка больших блоков (см. развернуть блоки; $refs to detect)
import axios from 'axios'
import LazyImage from '@/components/LazyImage.vue'
import { StarIcon } from '@heroicons/vue/solid'
import NotFound from '@/components/NotFound.vue'


export default {
  // Сохранение состояния (keep-alive)
  name: "notAlive",

  components: {
    LazyImage,
    StarIcon,
    NotFound
  },

  data: () => ({
    loading: true,
    character: null,
    error: false
  }),

  created(){
    axios.get('/api/collections/get/charactersv2?filter[nameeng]='+this.$route.params.character+'&token=a4191046104f8f3674f788e804c2d0')
    .then(response => {
      this.character = response.data.entries[0];
      document.querySelector("title").innerHTML = response.data.entries[0].name + ' - Genshin journey';
    })
    .catch(e => {
      // todo: server err orr 404
      this.error = true;
      document.querySelector("title").innerHTML = '404 - Genshin journey'
    })
    .finally(() => (this.loading = false));
  }
}
</script>
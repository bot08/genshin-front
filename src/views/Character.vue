<template>
  <!--Preloader-->
  <div v-if="loading">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden mx-auto justify-center text-center">
          <div class="h-80 sm:h-96 m-auto rounded-xl mt-3"></div>
      </div>

      <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 sm:m-4 justify-center">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 dark:text-gray-200">
            <p class="h-8 mb-1 mt-1 bg-gray-200 dark:bg-gray-600 rounded w-40"></p>
          </h3>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-36"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-32"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-52"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-36"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-64"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-44"></p>
          <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-60"></p>
      </div>

      <div class="px-4 pb-2 rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 sm:m-4 justify-center">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 dark:text-gray-200">
            <p class="h-8 mb-1 mt-1 bg-gray-200 dark:bg-gray-600 rounded w-36"></p>
          </h3>
        <div v-for="n in 9" :key="n">
            <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-100"></p>
        </div>
            <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-44"></p>
      </div>
    </div>
  </div>

  <!--Content-->
  <div v-for="character in characters" :key="character.name">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden mx-auto justify-center text-center">
          <img class="h-80 sm:h-96 m-auto rounded-xl mt-3" v :src="'https://sushicat.pp.ua/api/'+character.portrait.path" alt="char-portret">
      </div>

      <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 sm:m-4 justify-center">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 dark:text-gray-200">
            {{ character.name }}
          </h3>
          <p>
          <b>Редкость:</b> {{ character.rarity }}<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor" style="vertical-align: -3.4px"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> </svg></p>
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

      <div class="px-4 pb-2 rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 sm:m-4 justify-center">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 dark:text-gray-200">
            Описание
          </h3>
          {{ character.desk }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  data: () => ({
    loading: true,
    characters: [],
    errors: []
  }),

  created(){
    axios.get('https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?filter[nameeng]='+this.$route.params.character+'&token=a4191046104f8f3674f788e804c2d0')
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
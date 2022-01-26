<template>
    <!-- Server error -->
    <Error v-if="error"/>

    <!-- Page content (if error == false) -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2">

      <!-- Paimon -->
      <div class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden mx-auto">
          <!-- Image loading -->
            <vue-load-image>
              <template v-slot:image>
                  <img loading="eager" class="h-72 sm:h-96 m-auto rounded-xl mt-4 object-cover" src="/img/paimon-portrait.png" alt="paimon-portret">
              </template>
              <template v-slot:preloader> 
                  <div class="h-72 sm:h-96 mx-auto sm:mt-4 mb-4 sm:mb-0 pt-28">
                    <svg class="mx-auto animate-spin text-gray-400 h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spin"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  </div>
              </template>
              <template v-slot:error>
                  <div class="h-72 sm:h-96 mx-auto mt-3 pt-28"></div>
              </template>
            </vue-load-image>
          <!-- /Image -->
      </div>


      <!-- About card -->
      <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:m-4">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 dark:text-gray-200">
            О проекте
          </h3>

          <!-- Preloader -->
          <div v-if="loading">
            <div v-for="n in 7" :key="n">
              <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-100 animate-pulse"></p>
            </div>
            <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-36 animate-pulse"></p>
            <p class="h-5 mt-1 mb-2 bg-gray-200 dark:bg-gray-600 rounded w-48 animate-pulse"></p>
          </div>

          <!-- Content -->
          <div v-else>
            {{ about.content }}<br>
            <svg style="vertical-align: -1.2px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline bi bi-discord" viewBox="0 0 16 16"> <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"/> <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"/> </svg>  {{ about.discord }}
          </div>
      </div>

    </div>


      <!-- Buttons (static) -->
      <div class="flex p-2">
          <div class="grid sm:flex rounded-md mx-auto">
            <router-link
              to="/"
              class="items-center m-2 text-center px-5 py-2 shadow-lg text-base font-medium leading-6 text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none"
              >Назад на главную
            </router-link>
            <router-link
              to="/user"
              class="items-center m-2 text-center px-5 py-2 shadow-lg text-base font-medium leading-6 text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none"
              >Вход для редакторов
            </router-link>
          </div>
      </div>

      <!-- CopyRight -->
      <div class="mx-auto text-center max-w-xl my-4">
          <p class="text-gray-400 dark:text-gray-500 text-base transition-colors">{{ about.copy }}</p>
      </div>
</template>


<script>
import axios from 'axios'
import VueLoadImage from 'vue-load-image'
import Error from '@/components/Error.vue'


export default {
  components: {
    'vue-load-image': VueLoadImage,
    Error
  },

  data: () => ({
    loading: true,
    about: [],
    error: false
  }),

  created(){
      axios.get('https://sushicat.pp.ua/api/genshin/api/singletons/get/about?token=a4191046104f8f3674f788e804c2d0')
      .then(response => {
        this.about = response.data;
      })
      .catch(e => {
        this.error = true;
      })
      .finally(() => (this.loading = false));    
    }
}
</script>
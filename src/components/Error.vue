<template>
  <header class="bg-red-200 shadow-lg mx-auto text-center max-w-lg my-2 rounded-lg dark:bg-red-800 transition-colors">
      <div class="max-w-7xl mx-auto py-3 sm:px-4 lg:px-5">
        <!-- Image loading -->
        <vue-load-image>
          <template v-slot:image>
              <img class="h-32 md:h-52 w-auto mx-auto rounded-xl mt-2 shadow-sm" src="/img/server.png" alt="e">
          </template>
          <template v-slot:preloader> 
              <div class="h-32 w-48 md:h-52 md:w-96 mx-auto rounded-xl mt-2 shadow-sm bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
          </template>
          <template v-slot:error>
              <div class="h-32 w-64 md:h-52 md:w-96 mx-auto rounded-xl mt-2 shadow-sm bg-gray-200 dark:bg-gray-600 animate-pulse text-center">img</div>
          </template>
        </vue-load-image>
        <!-- /Image -->
        <p class="dark:text-gray-100 pt-3 text-xl">Ошибка соединения с сервером</p>
      </div>
  </header>
</template>


<script>
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
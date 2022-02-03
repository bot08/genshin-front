<template>
    <!-- Page content -->
    <div class="grid grid-cols-1 md:grid-cols-2">

      <!-- Paimon -->
      <div class="rounded-lg mt-1 mb-4 md:mb-8 overflow-hidden mx-auto">
          <!-- Image loading -->
            <vue-load-image>
              <template v-slot:image>
                  <img class="h-72 sm:h-96 m-auto rounded-xl mt-4 drop-shadow" src="/img/paimon-portrait2.png" alt="paimon-portret">
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


      <!-- API card -->
      <div class="px-3 pb-2 rounded-lg mb-4 md:mb-8 overflow-hidden text-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors sm:m-4">
          <h3 class="pb-2 pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 dark:text-gray-200">
            API
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
            
          </div>
      </div>

    </div>
</template>


<script>
import VueLoadImage from 'vue-load-image'
import Error from '@/components/Error.vue'
import LazyLinkBtn from '@/components/LazyLinkBtn.vue'


export default {
  components: {
    'vue-load-image': VueLoadImage,
    Error,
    LazyLinkBtn
  },

  data: () => ({
    loading: true,
    about: [],
    error: false
  }),

}
</script>
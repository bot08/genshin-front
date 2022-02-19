<script>
import Navbar from '@/components/Navbar.vue'
import Error from '@/components/Error.vue'
import axios from 'axios'


export default {
  components: { 
    Navbar,
    Error
  },
  
  data: () => ({
    server_error: false,
  }),

  mounted(){
    // Проверка доступности API
    axios.get('https://sushicat.pp.ua/api/')
      .catch(e => {
        this.server_error = true;
      })
  }
}

// Для новогоднего оформления вставьте в главный див: style="background-image: url('/img/snow.png');background-repeat: repeat"
</script>


<template>
  <div class="bg-gray-200 dark:bg-gray-800 transition-colors min-h-screen">
    <header>
      <Navbar/>
    </header>
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 md:pt-20 lg:pt-24 xl:pt-26 mb-14 md:mb-0">
      <router-view v-if="!this.server_error" v-slot="{ Component }">
        <keep-alive :max="5" exclude="notAlive">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <Error v-else/>
    </main>
  </div>
</template>
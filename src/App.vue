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
    <main class="pt-18 mx-auto max-w-7xl px-4 sm:pt-20 sm:px-6 lg:pt-24 lg:px-8 xl:pt-26">
      <router-view v-if="!this.server_error" v-slot="{ Component }">
        <keep-alive :max="5" exclude="notAlive">
          <transition  enter-active-class="absolute duration-150 ease-out" enter-from-class="opacity-0 scale-50" enter-to-class="opacity-100 scale-100" leave-active-class="absolute duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-150">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
      <Error v-else/>
    </main>
  </div>
</template>
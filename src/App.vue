<script>
import Navbar from '@/components/Navbar.vue'
import Error from '@/components/Error.vue'
import axios from 'axios'

import { defineAsyncComponent } from 'vue'

const BottomBanner = defineAsyncComponent({
  loader: () => import('@/components/BottomBanner.vue'),
  //timeout: 700
})

export default {
  components: { 
    Navbar,
    Error,
    BottomBanner
  },
  
  data: () => ({
    serverError: false,
    showBanner: false
  }),

  mounted(){
    // First time ping API
    this.serverPing()
    // Time out for banner
    setTimeout(() => this.showBanner = true, 700);
    setTimeout(() => this.showBanner = false, 5500);
  },
  
  methods: {
    serverPing(){
      axios.get('https://sushicat.pp.ua/api/')
      .catch(() => {
        this.serverError = true;
        // try until the server gives the answer 
        setTimeout(() => this.serverPing(), 999);
      })
    }
  }
}

// Для новогоднего оформления вставьте в главный див: style="background-image: url('/img/snow.png');background-repeat: repeat"
</script>


<template>
  <div class="bg-gray-200 dark:bg-gray-800 transition-colors min-h-screen">
    <header>
      <Navbar/>
    </header>
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-18 sm:pt-20 lg:pt-24 xl:pt-26">
      <router-view v-if="!this.serverError" v-slot="{ Component }">
        <keep-alive :max="5" exclude="notAlive">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <Error v-else/>
    </main>
    <transition enter-active-class="duration-150 ease-in" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="duration-150 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <BottomBanner v-if="this.showBanner" :linkProps="'https://i.ibb.co/HV8yVDb/dem-624abb99c6128.png'" :textProps="'Все буде Україна ❤'"/>
    </transition>
  </div>
</template>
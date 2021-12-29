<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

// Загрузка всех lazy routers и элементов сайта
import { defineAsyncComponent } from "vue"
const AllComponents = defineAsyncComponent(()=> import('@/components/LoadAllComponentsNow.vue'))
const Error = defineAsyncComponent(()=> import('@/components/Error.vue'))


export default {
  components: { 
    Navbar,
    Error,
    AllComponents
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
  <div class="bg-gray-200 dark:bg-gray-800 transition-colors min-h-screen" style="background-image: url('/img/snow.png');background-repeat: repeat">
    <header>
      <Navbar/>
    </header>
    <main class="pt-18 mx-auto max-w-7xl px-4 sm:pt-20 sm:px-6 lg:pt-24 lg:px-8 xl:pt-26">
      <router-view v-if="!this.server_error" v-slot="{ Component }">
        <keep-alive :max="5" exclude="notAlive">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <Error v-else/>
    </main>
    <AllComponents/>
  </div>
</template>
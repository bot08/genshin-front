<script>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: { Navbar },
})
</script>


<template>
  <div class="dark:bg-gray-800 transition-colors min-h-screen">
    <header class="bg-white shadow dark:bg-gray-700" v-if="$route.meta.title">
      <Navbar />
    </header>
    <main class="pt-20 mx-auto max-w-7xl px-4 sm:pt-20 sm:px-6 md:pt-22 lg:pt-24 lg:px-8 xl:pt-26">
      <router-view/>
    </main>
  </div>
</template>
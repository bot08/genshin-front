<script>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: { Navbar },
})
</script>


<template>
  <div class="dark:bg-gray-800 h-screen">
    <header class="bg-white shadow dark:bg-gray-700" v-if="$route.meta.title">
      <Navbar />
    </header>
    <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <router-view/>
    </main>
  </div>
</template>
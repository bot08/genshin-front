<script>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: { Navbar },
})
</script>


<template>
  <div>
    <header class="bg-white shadow dark:bg-gray-700" v-if="$route.meta.title">
      <Navbar />
    </header>
    <main class="mt-20 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-22 lg:mt-24 lg:px-8 xl:mt-26">
      <router-view/>
    </main>
  </div>
</template>
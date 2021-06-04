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
    <main class="mt-3 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-4 lg:mt-20 lg:px-8 xl:mt-20">
      <router-view/>
    </main>
  </div>
</template>
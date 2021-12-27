<template>
    <NotFound/>
</template>


<script>
import NotFound from '@/components/NotFound.vue'

export default {
  // Сохранение состояния (keep-alive)
  name: "notAlive",

  components: { 
    NotFound
  }
}
</script>
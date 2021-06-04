<script>
import { defineComponent } from 'vue'
import Card from '@/components/card.vue'

export default defineComponent({
  components: { Card },
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <Card/>
  </div>
</template>
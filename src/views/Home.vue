<script>
import { defineComponent } from 'vue'
import ButtonRepo from '@/components/ButtonRepo.vue'

export default defineComponent({
  components: { ButtonRepo },
})
</script>

<!-- TODO center & v-if like in bav-->

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 text-center">
    <!--Card-->
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img class="w-1/2 justify-center" src="/img/icon-ch.png" alt="Персонажи">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Персонажи</div>
      </div>
    </div>
  </div>
</template>
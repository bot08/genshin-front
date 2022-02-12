<template>
    <div class="relative block text-left mb-3 w-40 ml-auto sm:mr-14 lg:mr-7">
        <div class="inline-flex justify-center rounded-md shadow-lg px-4 py-2 transition ease-in-out bg-indigo-600 focus:outline-none text-base font-medium text-white">
          Сортировка
          <ChevronDownIcon class="-mr-1 ml-1 h-6 w-6"/>
        </div>
    </div>
</template>


<script>
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  name: "SelectMenuLoader",

  components: {
    ChevronDownIcon
  }
}
</script>
<template>
    <Menu as="div" class="relative block text-left mb-3 w-40 ml-auto sm:mr-14 lg:mr-7">
        <!-- Button -->
      <div>
        <MenuButton class="inline-flex justify-center rounded-md shadow-lg px-4 py-2 transition ease-in-out bg-indigo-600 focus:outline-none hover:bg-indigo-500 dark:hover:bg-indigo-700 text-base font-medium text-white">
          Сортировка
          <ChevronDownIcon class="-mr-1 ml-1 h-6 w-6" aria-hidden="true" />
        </MenuButton>
      </div>

        <!-- pop panel -->
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="z-30 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-50 ring-1 dark:bg-gray-800 ring-black ring-opacity-5 focus:outline-none">
          <div v-for="item in sortProps" :key="item.name" class="py-1 w-full">
            <MenuItem>
              <button v @click="this.$emit('updContent', item.query)" class="w-full text-left text-gray-900 dark:text-gray-200 block px-3 py-2 text-md font-medium">{{ item.name }}</button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
      
    </Menu>
</template>


<script>
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


export default {
  name: "SelectMenu",

  props:[
    'sortProps'
  ],

  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon
  }

}
</script>
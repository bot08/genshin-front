<template>
    <!-- Container -->
    <div class="p-3 pb-2 mt-3 sm:m-4 rounded-lg text-gray-900 dark:text-gray-200 shadow-lg text-xl bg-gray-50 dark:bg-gray-700 transition-colors">
        <h3 class="text-3xl font-extrabold leading-9 tracking-tight sm:leading-10">
            Настройки
        </h3>
        <div @click="themeSwitch()" class="flex items-center my-4">
            <div class="dark:bg-gray-800 bg-gray-200 relative flex-shrink-0 h-[30px] w-[54px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out focus:outline-none inline-flex">
                <span class="sr-only">Theme switch</span>
                <span class="dark:translate-x-6 translate-x-0 pointer-events-none inline-block h-[26px] w-[26px] rounded-full bg-white dark:bg-gray-200 shadow transform ring-0 transition ease-in-out"/>
            </div> 
            <p class="ml-3">Темная тема</p>
        </div>
        <div class="flex items-center">
            <div class="dark:bg-gray-800 bg-gray-200 relative flex-shrink-0 h-[30px] w-[54px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out focus:outline-none inline-flex">
                <span class="sr-only">Theme switch</span>
                <span class="translate-x-0 pointer-events-none inline-block h-[26px] w-[26px] rounded-full bg-white dark:bg-gray-200 shadow transform ring-0 transition ease-in-out"/>
            </div> 
            <p class="ml-3">Оптимизация списков</p>
        </div>
    </div>

    <!-- Buttons (static) -->
      <div class="flex p-2">
          <div class="mx-auto">
            <button @click="this.$router.go(-1)" class="items-center m-2 text-center px-7 py-2 shadow-lg text-base font-medium leading-6 text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">
                Назад
            </button>
          </div>
      </div>
</template>


<script>


export default {
  components: {

  },

  data() {
    return {
    }
  },
  
  methods: {
    themeSwitch() {
      const html = document.querySelector("html");
      if(localStorage.getItem('theme')=="dark"){
            html.classList.remove("dark");
            localStorage.setItem("theme", "white");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f9fafb");
        }
        else{
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#374151");
        }
    }
  }
}
</script>
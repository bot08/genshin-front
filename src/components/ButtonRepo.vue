<template>
  <div class="inline-flex ml-3 rounded-md shadow" id="toggle">
    <button
      @click="darkThemeSwitch"
      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none dark:bg-gray-800"
      >Dark\white</button
    >
  </div>
</template>


<script>
export default {
  name: "Theme",
  methods: {
    darkThemeSwitch() {
      const html = document.querySelector("html");
      if(localStorage.getItem('theme')=="dark"){
            html.classList.remove("dark");
            localStorage.setItem("theme", "white");
        }
        else{
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    },
  }
};
</script>


<template>
  <header class="bg-gray-50 shadow items-center text-center rounded-lg dark:bg-gray-700 transition-colors">
      <img class="w-40 h-40 mx-auto" src="/img/paimon404.png" alt="404">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-200">404</h1>
        <p class="dark:text-gray-300">Страницы не существует или она ещё не создана</p>
        <router-link
              to="/"
              class="inline-flex items-center justify-center mt-3 px-5 py-2 shadow-lg text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
              >На главную</router-link>
      </div>
  </header>
</template>

<template>
    <div class="max-w-sm w-full mx-auto mt-44 p-7 rounded-lg shadow-lg space-y-5 bg-gray-50 dark:bg-gray-700">

      <form class="space-y-2" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="login-address" class="sr-only">Логин</label>
            <input id="login-address" name="login" type="login" autocomplete="login" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:text-gray-200 dark:bg-gray-800" placeholder="Логин" />
          </div>
          <div>
            <label for="password" class="sr-only">Пароль</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:text-gray-200 dark:bg-gray-800" placeholder="Пароль" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="mt-2 flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded"/>
            <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-200">
              Запомнить
            </label>
          </div>
        </div>
      </form>
        <div>
          <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Войти
          </button>
        </div>
    </div>
    
</template>

<script>


// TODO запрос axios через post к апи (авторизация). Редактирование и добавление колекций
</script>

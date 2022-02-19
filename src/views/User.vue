<template>
    <!-- Container (if not logined) -->
    <div v-if="!auth" class="max-w-sm w-full mx-auto mt-20 p-7 rounded-lg shadow-lg space-y-5 bg-gray-50 dark:bg-gray-700 transition-colors">

    <!-- Forms -->
      <form class="w-full">
        <div class="mb-5 relative">
          <input v-model="login" type="text" class="peer pt-8 border border-gray-200 dark:border-gray-500 bg-white dark:bg-gray-800 dark:text-gray-200 transition-colors focus:outline-none rounded-lg focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="login" autocomplete="off" />
          <label for="login" class="dark:text-gray-200 peer-placeholder-shown:opacity-100  opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Логин</label>
        </div>
        <div class="relative">
          <input v-model="pass" type="password" class="peer pt-8 border border-gray-200 dark:border-gray-500 bg-white dark:bg-gray-800 dark:text-gray-200 transition-colors focus:outline-none rounded-lg focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="password" autocomplete="off" />
          <label for="password" class="dark:text-gray-200 peer-placeholder-shown:opacity-100  opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Пароль</label>
        </div>
      </form>

      <!-- Btns -->
      <button v-if="loadingbtn" class="w-full py-2 px-4 border border-transparent text-sm text-center font-medium rounded-md text-white transition ease-in-out bg-indigo-500 dark:bg-indigo-700"><svg class="inline animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> Проверка...</button>
      <button v-else @click="singin()" class="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition ease-in-out bg-indigo-600 hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400">Войти</button>

      <p class="text-md text-center text-gray-400 dark:text-gray-400"><a target="_blank"  rel="noreferrer" href="https://sushicat.pp.ua/api/genshin/">Вход с админки</a></p>
    </div>

    <!-- Profile Card content -->
    <div v-else class="p-3 pb-2 mt-3 sm:m-4 rounded-lg text-gray-900 dark:text-gray-200 shadow-lg bg-gray-50 dark:bg-gray-700 transition-colors flex flex-row flex-wrap">
      <div class="md:w-1/3 w-full">
          <!-- Image loading -->
            <vue-load-image>
                <template v-slot:image>
                    <img class="rounded-xl shadow-lg w-44 h-44 mx-auto sm:m-4" src="/img/profile.jpg">
                </template>
                <template v-slot:preloader> 
                    <div class="rounded-xl shadow-lg w-44 h-44 mx-auto sm:m-4 bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                </template>
                <template v-slot:error>
                    <div class="rounded-xl shadow-lg w-44 h-44 mx-auto sm:m-4 bg-red-200 dark:bg-red-800 animate-pulse text-center">img</div>
                </template>
            </vue-load-image>
          <!-- /Image -->  
      </div>
      <div class="md:w-2/3 w-full px-2 sm:px-4 flex flex-row flex-wrap">
        <div class="w-full text-lg md:text-right text-gray-900 dark:text-gray-200 relative pt-3 md:pt-0 ">
          
          <h3 class="text-3xl text-gray-900 leading-10 dark:text-gray-200 font-bold">
            {{ user.name }}
          </h3>
          <b>Почта: </b> {{ user.email }} <br>
          <b>Группа: </b> {{ user.group }} <br>
          <b>Активирован: </b> {{ user.active }} <br>

          <button @click="out()" class="items-center mt-4 mb-2 text-center px-5 py-2 shadow-lg text-base font-medium leading-6 text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">
            Выйти
          </button>

        </div>
      </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import VueLoadImage from 'vue-load-image'


export default {
  components: {
    'vue-load-image': VueLoadImage
  },

  data: () => ({
    login: "",
    pass: "",
    auth: false,
    loadingbtn: false,
  }),

  created(){
    // Если пользователь имеет в localStorage логин и пароль: заполняем поля и вызываем функцию singin
    if(localStorage.getItem('login') != null){
      this.login = localStorage.getItem('login');
      this.pass = localStorage.getItem('pass');
      this.singin();
    }
  },

  methods: {
    // метод для авторизации с формы
    singin(){
      this.loadingbtn = true;
      axios.post('https://sushicat.pp.ua/api/genshin/api/cockpit/authUser?token=a4191046104f8f3674f788e804c2d0', { user: this.login, password: this.pass })
      .then(response => {
        this.auth = true;
        this.user = response.data;
        // Сохраняем пользователя
        localStorage.setItem('login', this.login);
        localStorage.setItem('pass', this.pass);
      })
      .catch(e => {
        // TODO вывод что какая-то ошибка
      })
      .finally(() => (this.loadingbtn = false));
    },
    
    // выход с акаунта
    out(){
      localStorage.removeItem("login");
      localStorage.removeItem("pass");
      this.auth = false;
      this.pass = "";
    }
  }
}

</script>
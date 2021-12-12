<template>
    <!-- Preloader -->
    <div v-if="loading">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="n in 24" :key="n" class="animate-pulse mb-6 md:mb-10 sm:mx-3 z-0">
            <p class="h-6 mb-3 mt-1 bg-gray-300 dark:bg-gray-600 rounded w-32"></p>
            <p class="h-4 mb-3 bg-gray-300 dark:bg-gray-600 rounded w-24"></p>
            <p class="h-4 mb-3 bg-gray-300 dark:bg-gray-600 rounded w-60"></p>
            <p class="h-4 mb-3 bg-gray-300 dark:bg-gray-600 rounded w-52"></p>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="mb-4 sm:mx-3" v-for="item in dictionary" :key="item.word">
            <p class="text-3xl font-bold dark:text-gray-100">{{ item.word }}</p>
            <p class="text-md dark:text-gray-100">{{ item.translate }}</p>
            <p class="text-md dark:text-gray-100">{{ item.subinf }}</p>
            <p class="text-md text-gray-500">{{ item.original }}</p>
        </div>
    </div>

    <!-- Server error -->
    <Error v-if="error"/>

    <!-- Sourse -->
    <p class="text-md text-center text-gray-300 dark:text-gray-400 pb-4">Информация с <a class="text-gray-400 dark:text-gray-300" rel="noreferrer" target="_blank" href="https://github.com/SpeedyOrc-C/Hilipedia">Hilipedia</a></p>
</template>


<script>
import axios from 'axios'
import Error from '@/components/Error.vue'


export default {
  components: {
    Error
  },

  data: () => ({
    loading: true,
    dictionary: [],
    error: false
  }),

  created(){
    // Проверяем есть ли сохранённый ответ (на обовляемость забиваем)
    if(sessionStorage.getItem("dict-save") == null){
        // Если нет, то выполняем метод
        this.getContent('standart');      
    }else{
        // Иначе просто указывам то что было прошлый раз в response.data.entries
        this.dictionary = JSON.parse(sessionStorage.getItem("dict-save"));
        this.loading = false;
    }
  },

   methods: {
    clean(){
      this.loading = true;
      this.error = false;
      this.dictionary = [];
    },

    getContent(sortname){
      this.clean();
      let apisort
      // Тут задаем сортировку для api (так указываем нужное значение для самого АПИ. Не путать sortname и apisort)
      switch(sortname){
        case 'standart': apisort = '[_id]=1';
          break;
        case 'reverse': apisort = '[_id]=-1';
          break;
      }
      
      axios.get('https://sushicat.pp.ua/api/genshin/api/collections/get/dict?sort'+apisort+'&token=a4191046104f8f3674f788e804c2d0')
      .then(response => {
        this.dictionary = response.data.entries;
        sessionStorage.setItem("dict-save", JSON.stringify(response.data.entries));
      })
      .catch(e => {
        this.error = true;
      })
      .finally(() => (this.loading = false));
    }

  }
}
</script>
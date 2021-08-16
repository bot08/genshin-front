import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

// Изменение title & description ? Второе закомментировано
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  //document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description);
  next()
})


app.use(router)
app.mount('#app')
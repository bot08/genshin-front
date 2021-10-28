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
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Изменение title & description
router.beforeEach((to, from, next) => {
  next();
  document.title = to.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description);
})


app.use(router)
app.mount('#app')
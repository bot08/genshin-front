import { createApp } from 'vue'
import axios from "axios";
import '@/styles/tailwind.css'
import '@/styles/custom.css'
import App from '@/App.vue'
import { routes } from '@/routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import '@/spatial-navigation.js'

const app = createApp(App)

// base url
axios.defaults.baseURL = "https://sushicat.pp.ua/api/genshin"

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

// Changes title & description
router.beforeEach((to, from, next) => {
  next();
  document.title = to.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description);
})

// spatial nav config
window.addEventListener('load', function() {
  // Initialize
  SpatialNavigation.init();

  // Define navigable elements (anchors and elements with "focusable" class).
  SpatialNavigation.add({
    selector: 'a'
  });

  // Make the *currently existing* navigable elements focusable.
  SpatialNavigation.makeFocusable();

  // Focus the first navigable element.
  SpatialNavigation.focus();
});

app.use(router)
app.mount('#app')
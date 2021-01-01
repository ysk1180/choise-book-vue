import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css' // 参考:https://tailwindcss.com/docs/guides/vue-3-vite
import VueGtag from "vue-gtag-next";

const app = createApp(App)

if (process.env.VUE_APP_CURRENT_ENV === 'production') {
  app.use(VueGtag, {
    property: {
      id: "G-PFY52GM213"
    }
  });
}

app.use(store).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css' // 参考:https://tailwindcss.com/docs/guides/vue-3-vite

createApp(App).use(store).use(router).mount('#app')

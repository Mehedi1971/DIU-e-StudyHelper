import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/tailwind.css'
import './axios'

createApp(App).use(router).mount('#app')

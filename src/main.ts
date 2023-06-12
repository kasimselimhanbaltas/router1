import { createApp } from 'vue'
import App from './App.vue'
import store from '@/stores'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import router from "@/router/index"

const pinia = createPinia()

createApp(App).use(store).use(router).use(pinia).mount('#app')

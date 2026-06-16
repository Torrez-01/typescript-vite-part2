import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Catalog from './views/Catalog.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/catalog', component: Catalog }
]

const router = createRouter({ history: createWebHistory(), routes })

createApp(App).use(router).mount('#app')
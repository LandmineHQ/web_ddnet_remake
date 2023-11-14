import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import pinia from './stores'

import './stores/update'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount('#ddnet-app')

// @ts-ignore
hideLoaderMask()

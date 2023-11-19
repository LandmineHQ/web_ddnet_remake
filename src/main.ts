import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { autoUpdatePinia, pinia } from './stores'

import UserIndexedDB from './stores/UserIndexedDB'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)

if (await UserIndexedDB.getUser() === false) {
    console.log("read failed");
}
autoUpdatePinia()

app.mount('#ddnet-app')

// @ts-ignore
hideLoaderMask()

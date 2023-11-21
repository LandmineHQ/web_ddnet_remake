import ProfileViewVue from "@/views/ProfileView.vue"
import type { RouterOptions } from "vue-router"
const routes = [
    {
        path: '/',
        name: 'profile',
        component: ProfileViewVue
    }, {
        path: '/about',
        name: 'about',
        component: () => import("@/views/AboutView.vue")
    }, {
        path: '/start',
        name: 'start',
        component: () => import("@/views/StartView.vue")
    }
] as RouterOptions["routes"]

export default routes
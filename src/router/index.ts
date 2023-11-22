import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import useUserInfoStore from '@/stores/user'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  if (isFirstComein() && to.name !== "start") {
    return { name: "start" }
  }
})

export default router

function isFirstComein(): boolean {
  return useUserInfoStore().isFirstComeIn
}
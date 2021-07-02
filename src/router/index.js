import Vue from 'vue'
import VueRouter from 'vue-router'

// 动态导入
// component: () =>
// import(/* webpackChunkName: "about" */ '../views/About.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/pages/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router

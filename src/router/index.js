import Vue from 'vue'
import VueRouter from 'vue-router'

// 动态导入
// component: () =>
// import(/* webpackChunkName: "about" */ '../views/About.vue')

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  routes
})

export default router

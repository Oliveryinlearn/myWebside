import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const children = [
    {
      path: "/webview",
      name: "WebView",
      component: () => import('../views/WebView.vue')
    },
    {
      path:"/works",
      name: "Works",
      component: () => import('../views/Works.vue')
    },
    {
      path:"/resume",
      name: "Resume",
      component: () => import('../views/Resume.vue')
    }
]

const otherChildren = [
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import('../views/works/WorksDetail.vue')
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/webview",
    children:[...children, ...otherChildren]
  }
]
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

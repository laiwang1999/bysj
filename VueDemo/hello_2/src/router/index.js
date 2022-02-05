import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import elm_xxx from "@/views/Elm_xxx";
Vue.use(ViewUI)
Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Elm_login',
    component: elm_xxx
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03e9b924 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _b7d343ba = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _03e9b924,
    children: [{
      path: "",
      component: _b7d343ba,
      name: "home"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

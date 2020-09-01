import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03e9b924 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _b7d343ba = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4224a2b6 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _99392c36 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _4a49e367 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _1b876c9e = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _cba4a59c = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _03e9b924,
    children: [{
      path: "",
      component: _b7d343ba,
      name: "home"
    }, {
      path: "/login",
      component: _4224a2b6,
      name: "login"
    }, {
      path: "/register",
      component: _4224a2b6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _99392c36,
      name: "profile"
    }, {
      path: "/settings",
      component: _4a49e367,
      name: "settings"
    }, {
      path: "/editor",
      component: _1b876c9e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _cba4a59c,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

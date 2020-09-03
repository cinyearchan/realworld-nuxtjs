/**
 * Nuxt.js 配置文件
 */

module.exports = {
  head: {
    link: [
      // <!-- Import Ionicon icons & Google Fonts our Bootstrap theme relies on -->
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css' },
      // <link href="//cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic' },
      // <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
      // <!-- Import the custom Bootstrap 4 theme from our hosted CDN -->
      { rel: 'stylesheet', type: 'text/css', href: process.env.DEPLOY_ENV === 'gh-pages' ? '/realworld-nuxtjs/index.css' : '/index.css' }
      // <link rel="stylesheet" href="{{ process.env.DEPLOY_ENV === 'gh-pages' ? '/realworld-nuxtjs/index.css' : '/index.css' }}"></link>
    ]
  },
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/realworld-nuxtjs/' : '/',
    linkActiveClass: 'active',
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0)

      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            }
          ]
        }
      ])
    }
  },

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}
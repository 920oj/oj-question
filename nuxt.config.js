require('dotenv').config();
const { KEY } = process.env

module.exports = {
  mode: 'universal',
  srcDir: "./client/",
  serverMiddleware: ["~~/api/"],

  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'OJの質問BOX（β）は、OJに匿名で何でも質問できちゃうサービスです。プログラミングのことから今日の晩ごはんまで、何でも聞いて下さい。' },
      { hid: 'og:title', name: 'og:title', content: 'OJの質問BOX（β）'},
      { hid: 'og:url', name: 'og:url', content: 'https://q.920oj.net/'},
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:description', name: 'og:description', content: 'OJの質問BOX（β）は、OJに匿名で何でも質問できちゃうサービスです。プログラミングのことから今日の晩ごはんまで、何でも聞いて下さい。'},
      { hid: 'og:image', property: 'og:image', content: 'https://q.920oj.net/img/ojq-ogp.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'OJの質問BOX（β）' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,900&display=swap'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { 
    color: '#fff' 
  },

  css: [
    '~static/css/reset.css',
  ],

  plugins: [

  ],

  buildModules: [

  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'http://localhost:3000',
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'http://localhost:3000'
    }
  },

  build: {
    extend (config, ctx) {
    
    }
  },

  env: {
    KEY
  }
}

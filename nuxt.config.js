
module.exports = {
  mode: 'universal',
  srcDir: "./client/",
  serverMiddleware: ["~~/api/"],

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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

  },

  build: {
    extend (config, ctx) {
    
    }
  }

}

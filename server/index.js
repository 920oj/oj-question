const express = require('express')
const consola = require('consola')
const helmet = require('helmet')

const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const { Nuxt, Builder } = require('nuxt')
const app = express()
app.use(helmet())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // csrfTokenを発行しセッションに格納、その後CookieにcsrfTokenを入れる設定
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(csrf({ cookie: true }))

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

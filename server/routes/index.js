const glob = require('glob')
const express = require('express')
const router = express.Router()

exports = module.exports = function initModules (app) {
  glob(`${__dirname}/*`, { ignore: '**/index.js' }, (err, matches) => {
    if (err) { throw err }
    matches.forEach((mod) => {
      const routes = require(`${mod}`)

      routes.forEach((config) => {
        const {
          method = '',
          route = '',
          handlers = []
        } = config
        const lastHandler = handlers.pop()

        router[method.toLowerCase()](route, ...handlers, (req, res) => {
          return lastHandler(req, res)
        })
      })
    })
    app.use('/', router)
  })
}

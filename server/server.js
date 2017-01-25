/* eslint no-console: 0 */

const path = require('path')
const express = require('express')

const logger = require('morgan')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('./middleware/webpack-dev.js')
const routes = require('./routes/index');
// const Promise = require('bluebird');
const mongoose = require('mongoose');
// mongoose.Promise = Promise;
// Express will set the NODE_ENV to 'development' if you dont config it, but
// koa is not.
const isDev = process.env.NODE_ENV !== 'production'
const config = require('../config/index')
const port = config.port
const app = express()

if (isDev) {
  webpackDevMiddleware(app)
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('dist'))
app.use('/', routes);

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUrl);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  app.listen(port, config.host, function onStart(err) {
    if (err) {
      console.log(err)
    }
    console.info(`==> 🌎 Listening on port ${port}. Open up http://${config.host}:${port}/ in your browser.`)
  })
})


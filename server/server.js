/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const logger = require('morgan');
const bodyParser = require('body-parser');
const webpackConfig = require('../webpack/webpack.config.js');
// Express will set the NODE_ENV to 'development' if you dont config it, but
// koa is not.
const isDev = process.env.NODE_ENV !== 'production';
const config = isDev ? require('../config.dev.json') : require('../config.prod.json')
const port = process.env.PORT ? process.env.PORT : config.port;
const app = express();

if (isDev) {
  const compiler = webpack(webpackConfig);
  const middleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  const hotMiddleware = require('webpack-hot-middleware')(compiler)
  // force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })
  app.use(hotMiddleware);

}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/dist', express.static('./dist'));

app.listen(port, config.host, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`==> 🌎 Listening on port ${port}. Open up http://${config.host}:${port}/ in your browser.`);
});

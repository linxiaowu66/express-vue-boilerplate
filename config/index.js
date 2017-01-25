const development = require('./development')
const production = require('./production')
const test = require('./test')

module.exports = {
  development,
  production,
  test,
}[process.env.NODE_ENV ? `${process.env.NODE_ENV}` : 'development']

require('./utils/db')

const fastify = require('fastify')

const swagger = require('./utils/swagger')
const productRoutes = require('./routes/products.routes')

const build = (opts = {}) => {
  const app = fastify(opts)

  app.register(require('fastify-swagger'), swagger.options)

  app.register(
    (instance, opts, done) => {
      console.log(opts)
      productRoutes.forEach(route => {
        instance.route(route)
      })
      done()
    },
    { prefix: '/api' }
  )

  return app
}

module.exports = build

const swagger = {
  options: {
    routePrefix: '/',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Node.js Fastify Mongodb API',
        description: 'Building a blazing fast REST API with Node.js, Fastify and MongoDB',
        version: '0.0.1',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: `localhost:${process.env.PORT}`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  },
}

module.exports = swagger

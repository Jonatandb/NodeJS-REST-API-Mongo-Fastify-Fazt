// https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
// https://github.com/fastify/fastify-swagger#readme
// https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md
const productsSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    price: {
      type: 'integer',
    },
    image: {
      type: 'string',
    },
    decription: {
      type: 'string',
    },
    quantity: {
      type: 'integer',
    },
    createdAt: {
      type: 'string',
    },
    updatedAt: {
      type: 'string',
    },
  },
}

const getProductsSchema = {
  description: 'List of all products',
  tags: ['products'],
  summary: 'Get all products',
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: productsSchema,
    },
  },
}

const getProductByIdSchema = {
  description: 'Product information',
  tags: ['products'],
  summary: 'Get product by id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'productId',
      },
    },
    required: ['id'],
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
        price: {
          type: 'integer',
        },
        image: {
          type: 'string',
        },
        decription: {
          type: 'string',
        },
        quantity: {
          type: 'integer',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },
  },
}

module.exports = {
  getProductsSchema,
  getProductByIdSchema,
}

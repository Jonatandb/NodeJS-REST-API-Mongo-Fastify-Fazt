// const {
//   getProductsSchema,
//   getProductSchema,
//   addProductSchema,
//   updateProductSchema,
//   deleteProductSchema,
// } = require('../controllers/schemas/products.schemas.js')

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/handlers/products.controllers.js')

const routes = [
  {
    url: '/products',
    method: 'GET',
    handler: getProducts,
    schema: {}, //getProductsSchema,
  },
  {
    url: '/products/:id',
    method: 'GET',
    handler: getProductById,
    schema: {}, //getProductSchema,
  },
  {
    url: '/products',
    method: 'POST',
    handler: createProduct,
    schema: {}, //addProductSchema,
  },
  {
    url: '/products/:id',
    method: 'DELETE',
    handler: deleteProduct,
    schema: {}, //updateProductSchema,
  },
  {
    url: '/products/:id',
    method: 'PUT',
    handler: updateProduct,
    schema: {}, //deleteProductSchema,
  },
]
module.exports = routes

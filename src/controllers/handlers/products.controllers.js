const Product = require('../../models/product.model')

const getProducts = async (request, reply) => {
  try {
    const products = await Product.find()
    reply.send(products)
  } catch (err) {
    reply.code(500).send(err)
  }
}

const getProductById = async (request, reply) => {
  try {
    const { id } = request.params
    const product = await Product.findById(id)
    reply.send(product)
  } catch (err) {
    reply.code(500).send(err)
  }
}

const createProduct = async (request, reply) => {
  try {
    const newProduct = new Product(request.body)
    await newProduct.save()
    reply.code(201).send(newProduct)
  } catch (err) {
    reply.code(500).send(err)
  }
}

const deleteProduct = async (request, reply) => {
  try {
    const { id } = request.params
    await Product.findByIdAndDelete(id)
    reply.code(204).send()
  } catch (err) {
    reply.code(500).send(err)
  }
}

const updateProduct = async (request, reply) => {
  try {
    const { id } = request.params
    const product = await Product.findByIdAndUpdate(id, request.body, {
      new: true,
    })
    reply.send(product)
  } catch (err) {
    reply.code(500).send(err)
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
}

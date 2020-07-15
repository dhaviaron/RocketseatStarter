const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')
const requireDir = require('require-dir')

requireDir('./models/')
const ProductController = require('./controllers/ProductController')
const Product = mongoose.model('Product')

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)
module.exports = routes

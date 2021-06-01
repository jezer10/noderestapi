const express = require('express')
const router = express.Router()


const productController = require('../controllers/product.controller')

router.get('/', productController.readAll);
router.get('/:id', productController.readProduct);
router.post('/add', productController.createProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports= router;
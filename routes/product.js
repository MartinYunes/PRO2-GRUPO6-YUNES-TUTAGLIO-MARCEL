var express = require('express');
var router = express.Router();

let productController = require('../controllers/productController')


router.get('/add', productController.add);

router.get('/:id', productController.productos);



module.exports = router;
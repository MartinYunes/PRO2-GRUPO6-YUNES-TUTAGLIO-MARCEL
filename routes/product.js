var express = require('express');
var router = express.Router();
const {body} = require("express-validator")
let validation = [
    body("imagen")
    .notEmpty().withMessage("Debes ingresar imagen").bail(),

    body("nombreProducto")
    .notEmpty().withMessage("Debes ingresar un nombre del producto").bail(),

    body("descripcion")
    .notEmpty().withMessage("Debes ingresar una descripcion").bail()
]

let productController = require('../controllers/productController')


router.get('/add', productController.add);

router.post('/add', validation, productController.product_add);

router.post('/delete/:id', productController.delete);

router.get('/editar/:id', productController.edit);
router.post('/editar/:id', validation, productController.store_edit);

router.get('/:id', productController.productos);
router.post('/:id', productController.saveComentario);



module.exports = router;
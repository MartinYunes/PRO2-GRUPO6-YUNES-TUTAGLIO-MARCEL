var express = require('express');
var router = express.Router();
const db = require("../database/models");
const {body} = require("express-validator")
let validation = [
  body("usuario")
  .notEmpty().withMessage("Debes ingresar un usuario").bail(),

  body("email")
  .notEmpty().withMessage("Debes ingresar un mail").bail()
  .isEmail().withMessage("Debe ser un mail valido").bail()
  .custom(function(value){
    return db.Usuario.findOne({
      where : {email : value}
    }).then(function(user){
      if(user){
        throw new Error("El email ingresado ya existe")
      }
    })
  }),
  
  body("contrasenia")
  .notEmpty().withMessage("Debes ingresar una contraseña").bail() 
  .isLength({min: 4}).withMessage("debe tener minimo 4 caracteres").bail()
]
let validation_2 = [
  body("usuario")
  .notEmpty().withMessage("Debes ingresar un usuario").bail(),

  body("email")
  .notEmpty().withMessage("Debes ingresar un mail").bail()
  .isEmail().withMessage("Debe ser un mail valido").bail()
  .custom(function(value, {req}){
    id = req.params.id
    return db.Usuario.findOne({
      where : {email : value}
    }).then(function(user){
      if(user && user.id != id){
        throw new Error("El email ingresado ya existe")
      }
    })
  }),

  body("contrasenia")
  .custom((value) => {
    if (value.length >= 1 && value.length < 4) {
      throw new Error("debe tener minimo 4 caracteres");
    }
    return true;
  })
]


let profileController = require('../controllers/profileController')



///profile/profile-edit
router.get('/profile-edit/:id',profileController.profileEdit);
router.post('/profile-edit/:id',validation_2, profileController.profileUpdate);

///profile/register
  router.get('/register', profileController.register);

  router.post('/register', validation, profileController.store);

///profile/login
  router.get('/login',profileController.login );
  router.post('/login', profileController.storeLogin)

  router.get('/logout', profileController.logout);

///profile/"un id del usuario"
router.get('/:id', profileController.profile);






module.exports = router;
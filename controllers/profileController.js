const autos = require("../db/index");
const db = require("../database/models")
const moment = require('moment');
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")

let profileController = {

    profile:function(req, res, next) { 
      let id = req.params.id

      let filtrado = {
        include : [
          {association : "producto"},
          {association: "comentario",}
        ],
          where : [
          {id : id}
        ]
        }

        db.Usuario.findByPk(id, filtrado).then((result) => {
          return res.render("profile" , {usuario : result})


        })
},


  profileEdit:  function(req, res, next) {
      let usuario = autos.usuario[0].usuario
        res.render('profile-edit', { usuario: usuario });
      },



    register: function(req, res, next) {
        res.render('register', { title: 'Express' });
      },
    
    store: function(req, res) {
      let errors = validationResult(req)
      if (errors.isEmpty()) {
        let form = req.body;
        let user = {
          email: form.email ,
          usuario: form.usuario ,
          contrasenia: bcrypt.hashSync(form.contrasenia, 10),
          fecha: form.fecha,
          dni: form.dni,
          fotoPerfil: form.fotoPerfil,
        }
  
        db.Usuario.create(user)
          return res.redirect("/profile/login")      
        
      } else{
        return res.render("register", {
          errors: errors.mapped(),
          old: req.body
        })
      }
    },




    login:function(req, res, next) {
      if (req.session.user != undefined) {
        return res.redirect("/");
    } else {
        return res.render("login")
    }
},

storeLogin: function (req, res) {
  let emailInsertado = req.body.email
  let claveInsertada = req.body.contrasenia 

  let filtrado = {
      where: [{ email: emailInsertado }]
  }

  errors = {}
  db.Usuario.findOne(filtrado)
      .then((result) => {
          if (result != null) {

              let claveCorrecta = bcrypt.compareSync(claveInsertada, result.contrasenia)
              if (claveCorrecta) {
                  req.session.user = result.dataValues
                  if (req.body.recordarme != undefined) {
                      res.cookie('id', result.dataValues.id, { maxAge: 1000 * 60 * 60 })
                  }
                  //console.log(req.session.user);
                  let id = req.session.user.id
                  return res.redirect(`/profile/${id}`)
              } else {
                  errors.mensaje = "la contraseña es incorrecta"
                  res.locals.errors = errors
                  return res.render('login', {errors: errors});
              }
          } else {
              errors.mensaje = "El email no existe"
              res.locals.errors = errors
              return res.render('login',{errors: errors});
          }

      }).catch((err) => {
          console.log(err);
          errors.mensaje = "Hubo un error. Por favor intentar denuevo";
          res.locals.errors = errors; 
          return res.render('login',{errors: errors});

      });

},
      
    logout:function(req, res) {
        req.session.destroy();
        res.clearCookie("userId")
        return res.redirect("/"); //redirect
      },
}


module.exports = profileController;
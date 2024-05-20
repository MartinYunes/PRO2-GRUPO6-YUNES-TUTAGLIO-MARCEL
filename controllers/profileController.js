const autos = require("../db/index");
const db = require("../database/models")
const bcrypt = require("bcryptjs")

let profileController = {

    profile:function(req, res, next) { 
      let idUsuario = req.params.id

      let titulo_auto = []
      let descripcion_auto = []
      let imagenes = []
      let comentarios = []
      let id = []
      let comentarioID = []
      if (idUsuario == 1){
      for (let i = 0; i < 3; i++) {
        titulo_auto.push(autos.productos[i].nombre)
        descripcion_auto.push(autos.productos[i].descripcion)
        imagenes.push(autos.productos[i].foto)
        comentarios.push(autos.productos[i].comentarios)
        id.push(autos.productos[i].id)
        comentarioID.push(autos.productos[i].comentarios)
      }} else if (idUsuario == 2){
        for (let i = 3; i < 5; i++) {
          titulo_auto.push(autos.productos[i].nombre)
          descripcion_auto.push(autos.productos[i].descripcion)
          imagenes.push(autos.productos[i].foto)
          comentarios.push(autos.productos[i].comentarios)
          id.push(autos.productos[i].id)
          comentarioID.push(autos.productos[i].comentarios)
        }} else if (idUsuario == 3){
          for (let i = 5; i < 7; i++) {
            titulo_auto.push(autos.productos[i].nombre)
            descripcion_auto.push(autos.productos[i].descripcion)
            imagenes.push(autos.productos[i].foto)
            comentarios.push(autos.productos[i].comentarios)
            id.push(autos.productos[i].id)
            comentarioID.push(autos.productos[i].comentarios)
          }} else if (idUsuario == 4){
            for (let i = 7; i < 9; i++) {
              titulo_auto.push(autos.productos[i].nombre)
              descripcion_auto.push(autos.productos[i].descripcion)
              imagenes.push(autos.productos[i].foto)
              comentarios.push(autos.productos[i].comentarios)
              id.push(autos.productos[i].id)
              comentarioID.push(autos.productos[i].comentarios)
            }}  else if (idUsuario == 5){
              for (let i = 9; i < 10; i++) {
                titulo_auto.push(autos.productos[i].nombre)
                descripcion_auto.push(autos.productos[i].descripcion)
                imagenes.push(autos.productos[i].foto)
                comentarios.push(autos.productos[i].comentarios)
                id.push(autos.productos[i].id)
                comentarioID.push(autos.productos[i].comentarios)
              }}
//for para recorrrer todos los usuarios 


      let imagen_profile = []
      let nombre_usuario = []
      let email = []

      for (let i = 0; i < autos.usuario.length; i++) {

        if (idUsuario == autos.usuario[i].id) {
          imagen_profile.push(autos.usuario[i].foto),
          nombre_usuario.push(autos.usuario[i].usuario)
          email.push(autos.usuario[i].email)
        }
        

}

      

        res.render('profile', {title: titulo_auto, 
          descripcion: descripcion_auto,
          comentarios : comentarios,
          imagen : imagenes,
          id : id,
          usuario : nombre_usuario,
          foto_perfil : imagen_profile,
          email : email,
          idUsuario : idUsuario,
          comentarioID: comentarioID
        });
      },



    profileEdit:  function(req, res, next) {
      let usuario = autos.usuario[0].usuario
        res.render('profile-edit', { usuario: usuario });
      },



    register: function(req, res, next) {
        res.render('register', { title: 'Express' });
      },
    
    store: function(req, res) {
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
      },



    login:function(req, res, next) {
        res.render('login', { title: 'Express' });
      },

      
    logout:function(req, res) {
        req.session.destroy();
        res.clearCookie("userId")
        return res.redirect("/");
      },
}


module.exports = profileController;
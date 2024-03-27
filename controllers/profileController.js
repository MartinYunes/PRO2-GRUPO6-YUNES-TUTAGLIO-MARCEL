const autos = require("../db/index");


let profileController = {

    profile:function(req, res, next) { 
      let titulo_auto = []
      let descripcion_auto = []
      let imagenes = []
      let comentarios = []
      let id = []
      let comentarioID = []
      for (let i = 0; i < autos.productos.length; i++) {
        titulo_auto.push(autos.productos[i].nombre)
        descripcion_auto.push(autos.productos[i].descripcion)
        imagenes.push(autos.productos[i].foto)
        comentarios.push(autos.productos[i].comentarios)
        id.push(autos.productos[i].id)
        comentarioID.push(autos.productos[i].comentarios)
      }
//for para recorrrer todos los usuarios 


      let imagen_profile = []
      let nombre_usuario = []
      let email = []
      let idUsuario = req.params.id

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



    login:function(req, res, next) {
        res.render('login', { title: 'Express' });
      },
}


module.exports = profileController;
const autos = require("../db/index");


let profileController = {

    profile:function(req, res, next) { 
      let titulo_auto = []
      let descripcion_auto = []
      let imagenes = []
      let comentarios = []
      let id = []
      for (let i = 0; i < autos.productos.length; i++) {
        titulo_auto.push(autos.productos[i].nombre)
        descripcion_auto.push(autos.productos[i].descripcion)
        imagenes.push(autos.productos[i].foto)
        comentarios.push(autos.productos[i].comentarios)
        id.push(autos.productos[i].id)
      }

      let imagen_profile = autos.usuario[0].foto
      let nombre_usuario = autos.usuario[0].usuario

        res.render('profile', {title: titulo_auto, 
          descripcion: descripcion_auto,
          comentarios : comentarios,
          imagen : imagenes,
          id : id,
          usuario : nombre_usuario,
          foto_perfil : imagen_profile
        });
      },



    profileEdit:  function(req, res, next) {
        res.render('profile-edit', { title: 'Express' });
      },



    register: function(req, res, next) {
        res.render('register', { title: 'Express' });
      },



    login:function(req, res, next) {
        res.render('login', { title: 'Express' });
      },
}


module.exports = profileController;
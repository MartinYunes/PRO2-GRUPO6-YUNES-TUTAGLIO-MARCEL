const autos = require("../db/index");


let indexController = {
    index: function(req, res, next) {
      let titulo_auto = []
      let descripcion_auto = []
      let comentarios = []
      let imagenes = []
      let id = []
      for (let i = 0; i < autos.productos.length; i++) {
        titulo_auto.push(autos.productos[i].nombre)
        descripcion_auto.push(autos.productos[i].descripcion)
        comentarios.push(autos.productos[i].comentarios)
        imagenes.push(autos.productos[i].foto)
        id.push(autos.productos[i].id)
      }

        res.render('index', { title: titulo_auto, 
        descripcion: descripcion_auto,
        comentarios : comentarios,
        imagen : imagenes,
        id : id
        });
      },

    searchResults: function(req, res, next) {
      let titulo_auto = []
      let descripcion_auto = []
      let comentarios = []
      let imagenes = []
      let id = []
      for (let i = 0; i < autos.productos.length; i++) {
        titulo_auto.push(autos.productos[i].nombre)
        descripcion_auto.push(autos.productos[i].descripcion)
        comentarios.push(autos.productos[i].comentarios)
        imagenes.push(autos.productos[i].foto)
        id.push(autos.productos[i].id)
      }

        res.render('search-results', { title: titulo_auto, 
        descripcion: descripcion_auto,
        comentarios : comentarios,
        imagen : imagenes,
        id : id
        });
      },

}



module.exports = indexController;
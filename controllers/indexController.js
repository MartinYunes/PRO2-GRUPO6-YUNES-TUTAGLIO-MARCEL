const autos = require("../db/index");
const db = require("../database/models")

let indexController = {
    index: function(req, res, next) {

      // let titulo_auto = []
      // let descripcion_auto = []
      // let comentarios = []
      // let imagenes = []
      // let id = []
      // for (let i = 0; i < autos.productos.length; i++) {
      //   titulo_auto.push(autos.productos[i].nombre)
      //   descripcion_auto.push(autos.productos[i].descripcion)
      //   comentarios.push(autos.productos[i].comentarios)
      //   imagenes.push(autos.productos[i].foto)
      //   id.push(autos.productos[i].id)
      // }

       // res.render('index', { title: titulo_auto, 
        //descripcion: descripcion_auto,
        //comentarios : comentarios,
       // imagen : imagenes,
       // id : id
      //  });


    db.Producto.findAll().then(function (result) {
      let titulo_auto = []
      let descripcion_auto = []
      let comentarios = []
      let imagenes = []
      let id = []
      console.log(imagenes);
      for (let i = 0; i < result.length; i++) {
        titulo_auto.push(result[i].nombreProducto)
        descripcion_auto.push(result[i].descripcion)
        comentarios.push(autos.productos[i].comentarios)
        imagenes.push(result[i].imagen)
        id.push(result[i].id)
      }

      return res.render('index', { title: titulo_auto, 
        descripcion: descripcion_auto,
        comentarios : comentarios,
       imagen : imagenes,
       id : id
       });
    }).catch(error=>console.log(error)) 
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
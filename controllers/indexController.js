const autos = require("../db/index");
const db = require("../database/models");
const Comentario = require("../database/models/Comentario");

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
      let titulo_auto = []
      let descripcion_auto = []
      let imagenes = []
      let id = []
      let comentarios = []


    db.Producto.findAll().then(function (result) {

      for (let i = 0; i < result.length; i++) {
        comentarios.push(autos.productos[i].comentarios)
        titulo_auto.push(result[i].nombreProducto)
        descripcion_auto.push(result[i].descripcion)
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

      //   res.render('search-results', { title: titulo_auto, 
      //   descripcion: descripcion_auto,
      //   comentarios : comentarios,
      //   imagen : imagenes,
      //   id : id
      //   });
      //},
      let filtrado = {
        where: [{idProducto : 1}]
      }
      let comentarios = []
      db.Comentario.findAll(filtrado).then(function(comments) {
        let comentariosproducto = []
        for (let j = 0; j < comments.length; j++) {
          comentariosproducto.push(comments[j].comentario)
        }
        comentarios = comentariosproducto
        return res.send(comentariosproducto)
      });
    },
    
}



module.exports = indexController;
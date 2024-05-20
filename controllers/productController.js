const autos = require("../db/index");


let productController = {
    productos:function(req, res, next) {
    // let id = req.params.id
    // let foto = autos.productos[id-1].foto
    // let titulo = autos.productos[id-1].nombre
    // let descripcion = autos.productos[id-1].descripcion
    // let comentarios = []
    // for (let i = 0; i < autos.productos[id-1].comentarios.length; i++) {
    //   comentarios.push(autos.productos[id-1].comentarios[i])
      
    // }

    //     res.render('product', { titulo: titulo,
    //     imagen : foto,
    //     descripcion : descripcion,
    //     comentarios : comentarios,
    //     id : id
    //     });
    //   },

    let id = req.params.id 
    filtrar = 
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


    add:function(req, res, next) {
        let usuario = autos.usuario[0].usuario
        res.render('product-add', { usuario: usuario });
      },
}

module.exports = productController;
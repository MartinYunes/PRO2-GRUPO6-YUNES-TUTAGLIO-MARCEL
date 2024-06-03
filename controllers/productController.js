const autos = require("../db/index");
const db = require("../database/models");
const {validationResult} = require("express-validator")


let productController = {
    productos:function(req, res, next) {
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
    let comentarios = [];
    let titulo_auto = [];
    let descripcion_auto = [];
    let imagenes = [];
    let id = req.params.id 

    let filtrado = {
      include : [{
        association : "Usuario"
      }]
    }

    db.Producto.findByPk(id).then(function (result) {

      titulo_auto.push(result.nombreProducto)
      descripcion_auto.push(result.descripcion)
      imagenes.push(result.imagen)

    for (let i = 0; i < autos.productos[id-1].comentarios.length; i++) {
      comentarios.push(autos.productos[id-1].comentarios[i])  
    }

      return res.render('product', { title: titulo_auto, 
        descripcion: descripcion_auto,
        comentarios : comentarios,
       imagen : imagenes,
       id : id
       });
    }).catch(error=>console.log(error)) 
    },


    add:function(req, res, next) {
      let errors = validationResult(req)
      if (errors.isEmpty()) {
        let form = req.body;
        let producto = {
          nombreproducto: form.nombreProducto ,
          imagenproducto: form.imagen ,
          descripcionproducto: form.descripcion,
        }
  
        db.Producto.create(producto)
          return res.redirect("/profile/form.idUsuario")  

      
      } else{
        return res.render("product-add", {
          errors: errors.mapped(),
          old: req.body
        })
      }
    }
}

module.exports = productController;
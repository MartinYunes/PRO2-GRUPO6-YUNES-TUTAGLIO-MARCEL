const autos = require("../db/index");
const db = require("../database/models");


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
    let autor = [];
    let id = req.params.id 

    let filtrado = {
      include : [
        {association : "Usuario"},
        {association: "comentario"}
    ],
      where : [
      {id : id}
    ]
    }

    db.Producto.findAll(filtrado).then(function (result) {
      console.log(result[0].Usuario);
      // autor.push(result.Usuario[result.idUsuario].usuario[0])
      titulo_auto.push(result[0].nombreProducto)
      descripcion_auto.push(result[0].descripcion)
      imagenes.push(result[0].imagen)

    for (let i = 0; i < autos.productos[id-1].comentarios.length; i++) {
      comentarios.push(autos.productos[id-1].comentarios[i])  
    }
    
      return res.render('product', { title: titulo_auto, 
        descripcion: descripcion_auto,
        comentarios : comentarios,
       imagen : imagenes,
       id : id,
       usuarioAutor : autor
       });
    }).catch(error=>console.log(error)) 
    },


    add:function(req, res, next) {
        let usuario = autos.usuario[0].usuario
        res.render('product-add', { usuario: usuario });
      },
}

module.exports = productController;
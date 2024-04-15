const autos = require("../db/index");


let productController = {
    productos:function(req, res, next) {
    let id = req.params.id
    let foto = autos.productos[id-1].foto
    let titulo = autos.productos[id-1].nombre
    let descripcion = autos.productos[id-1].descripcion
    let comentarios = []
    for (let i = 0; i < autos.productos[id-1].comentarios.length; i++) {
      comentarios.push(autos.productos[id-1].comentarios[i])
      
    }

        res.render('product', { titulo: titulo,
        imagen : foto,
        descripcion : descripcion,
        comentarios : comentarios,
        id : id
        });
      },


    add:function(req, res, next) {
        let usuario = autos.usuario[0].usuario
        res.render('product-add', { usuario: usuario });
      },
}

module.exports = productController;
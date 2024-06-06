const autos = require("../db/index");
const db = require("../database/models");
const comentario = db.Comentario
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
    let autor = [];
    let comments_usuario = []
    let imagen_usuario = []
    let id_usuario = []
    let id = req.params.id 

    let filtrado = {
      include : [
        {association : "Usuario"},
        {association: "comentario",
        include : [{association: "usuario"}]}
    ],
      where : [
      {id : id}
    ]
    }

    db.Producto.findAll(filtrado).then(function (result) {

      autor.push(result[0].Usuario.usuario)
      titulo_auto.push(result[0].nombreProducto)
      descripcion_auto.push(result[0].descripcion)
      imagenes.push(result[0].imagen)

    for (let i = 0; i < result[0].comentario.length; i++) {
      comentarios.push(result[0].comentario[i].comentario)
      comments_usuario.push(result[0].comentario[i].usuario.usuario)
      imagen_usuario.push(result[0].comentario[i].usuario.fotoPerfil)
      id_usuario.push(result[0].comentario[i].usuario.id)

    }

      return res.render('product', { title: titulo_auto, 
        descripcion: descripcion_auto,
        comentarios : comentarios,
        imagen : imagenes,
        id : id,
        usuarioAutor : autor,
        comments_usuario : comments_usuario,
        imagen_usuario : imagen_usuario,
        id_usuario : id_usuario
       });
    }).catch(error=>console.log(error)) 
    },

    add:function(req, res, next) {
      
      res.render('product-add', { title: 'Express' });
    },


    product_add:function(req, res, next) {
      let errors = validationResult(req)
      if (errors.isEmpty()) {
        let form = req.body;
        let producto = {
          nombreproducto: form.nombreProducto ,
          imagenproducto: form.imagen ,
          descripcionproducto: form.descripcion,
        }

        db.Producto.create(producto)
          return res.redirect("/profile/1") 

      
      } else{
        return res.render("product-add", {
          errors: errors.mapped(),
          old: req.body
        })
      }
    },

    saveComentario: function(req,res){   
      if (req.session.user != undefined) {
          
          let data = req.body
          data.idAutor = req.session.user.id
          data.idProducto = req.params.id
          if (data.comentario != "") {
                  comentario.create(data)
                      .then((result) => {
                          return res.redirect(`/product/${data.idProducto}`)  
                      }).catch((err) => {
                          console.log(err)
                      });
          } else {
              let relacion = {
                  include: [
                       {association: "comentarios", include: [{association: "usuario"}]},
                       { association: "usuario"}
                  ], 
                  order: [["created_at", "DESC"]]
              }
      
               productos.findByPk(data.idProducto, relacion)
                  .then((result) => {
                      return res.render('product', {productos: result})
                  })
                  .catch((err) => {
                      console.log(err)
                  }); 
              }
      } 
  }
}

module.exports = productController;
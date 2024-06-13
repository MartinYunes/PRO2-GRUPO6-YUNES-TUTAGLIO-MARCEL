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
    let id_creador = []
    let id_producto = []
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
      id_creador.push(result[0].Usuario.id)
      id_producto.push(result[0].id)

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
        id_usuario : id_usuario,
        id_creador : id_creador,
        id_producto : id_producto
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
          nombreProducto: form.nombreProducto ,
          imagen: form.imagen ,
          descripcion: form.descripcion,
          idUsuario: req.session.user.id,
        }

        db.Producto.create(producto)
          return res.redirect(`/profile/${req.session.user.id}`) 

      
      } else{
        return res.render("product-add", {
          errors: errors.mapped(),
          old: req.body
        })
      }
    },

    saveComentario: function(req,res){ 
      let errors = validationResult(req)  
      if (req.session.user != undefined) {
        if (errors.isEmpty()){
          let id = req.params.id
          let data = req.body
          data.idAutor = req.session.user.id
          data.idProducto = req.params.id

          comentario.create(data).then((result) => {
            return res.redirect(`/product/${id}`)  
          }).catch((err) => {
              console.log(err)
          });

        } else {
            return res.render("product", {
              errors: errors.mapped(),
              old: req.body
            })
          }      
      } 
  },

  delete:function(req, res, next) {
    let eliminar = req.params.id;
    filtrar = {
      where: [{id : eliminar}]
    }
    db.Producto.destroy(filtrar).then(function (){
      return res.redirect("/")

    }) 
  },

  edit:function(req, res, next) {
    let id = req.params.id
    filtro = {
      include : [
        {association : "Usuario"}
    ]
    }
    db.Producto.findByPk(id, filtro).then(function(result){
      return res.render("product-edit", {result : result})
    })
  },

  store_edit:function(req, res, next) {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let id = req.params.id
      let form = req.body;
      let producto_editado = {
        nombreProducto: form.nombreProducto ,
        imagen: form.imagen ,
        descripcion: form.descripcion,
        idUsuario: req.session.user.id,
      }
      filtrar = {
        where : [{id : id}]
      }
      db.Producto.update(producto_editado, filtrar).then(function(){
        return res.redirect("/") 
      })
    
    } else{
      let id = req.params.id
      db.Producto.findByPk(id).then(function(result){
        return res.render("product-edit", {
          result : result,
          errors: errors.mapped(),
          old: req.body
        })
      })
    }
  }
}

module.exports = productController;
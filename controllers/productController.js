const db = require("../database/models");
const comentario = db.Comentario
const { validationResult } = require("express-validator")


let productController = {

  productos: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        { association: "Usuario" },
        {
          association: "comentario",
          include: [{ association: "usuario" }]
        }
      ],
    }

    db.Producto.findByPk(id, filtrado).then(function (result) {
      return res.render('product', {
        result: result
      });
    }).catch(error => console.log(error))
  },


  add: function (req, res, next) {

    res.render('product-add', { title: 'Express' });
  },


  product_add: function (req, res, next) {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let form = req.body;
      let producto = {
        nombreProducto: form.nombreProducto,
        imagen: form.imagen,
        descripcion: form.descripcion,
        idUsuario: req.session.user.id,
      }

      db.Producto.create(producto)
      return res.redirect(`/profile/${req.session.user.id}`)


    } else {
      return res.render("product-add", {
        errors: errors.mapped(),
        old: req.body
      })
    }
  },

  saveComentario: function (req, res) {
    let errors = validationResult(req)
    if (req.session.user != undefined) {
      if (errors.isEmpty()) {
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
        let id = req.params.id
        let filtrado = {
          include: [
            { association: "Usuario" },
            {
              association: "comentario",
              include: [{ association: "usuario" }]
            }
          ],
          where: [
            { id: id }
          ]
        }

        db.Producto.findAll(filtrado).then(function (result) {
          return res.render('product', {
            result: result,
            errors: errors.mapped(),
            old: req.body
          });
        }).catch(error => console.log(error))
      }
    }
  },

  delete: function (req, res, next) {
    let eliminar = req.params.id;
    filtrocomment = {
      where: [{idProducto : eliminar}]
    }
    filtrar = {
      where: [{ id: eliminar }]
    }
    db.Comentario.destroy(filtrocomment).then(() => {
      return db.Producto.destroy(filtrar);})
      .then(() => {
        return res.redirect("/")
      })
  },

  edit: function (req, res, next) {
    let id = req.params.id
    filtro = {
      include: [
        { association: "Usuario" }
      ]
    }
    db.Producto.findByPk(id, filtro).then(function (result) {
      return res.render("product-edit", { result: result })
    })
  },

  store_edit: function (req, res, next) {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let id = req.params.id
      let form = req.body;
      let producto_editado = {
        nombreProducto: form.nombreProducto,
        imagen: form.imagen,
        descripcion: form.descripcion,
        idUsuario: req.session.user.id,
      }
      filtrar = {
        where: [{ id: id }]
      }
      db.Producto.update(producto_editado, filtrar).then(function () {
        return res.redirect("/")
      })

    } else {
      let id = req.params.id
      db.Producto.findByPk(id).then(function (result) {
        return res.render("product-edit", {
          result: result,
          errors: errors.mapped(),
          old: req.body
        })
      })
    }
  }
}

module.exports = productController;
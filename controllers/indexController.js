const autos = require("../db/index");
const db = require("../database/models");
const Comentario = require("../database/models/Comentario");
const Op = db.Sequelize.Op;

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
      let usuario_creador = []
      let id_usuario = []

      let associate = {
        include: [
          {association: "comentario"},
          {association: "Usuario"}
        ],
        order: [["createdAt", "DESC"]],
      }

      db.Producto.findAll(associate).then(function (result) {
        for (let i = 0; i < result.length; i++) {

          titulo_auto.push(result[i].nombreProducto)
          descripcion_auto.push(result[i].descripcion)
          imagenes.push(result[i].imagen)
          id.push(result[i].id)
          comentarios.push(result[i].comentario)
          usuario_creador.push(result[i].Usuario.usuario)
          id_usuario.push(result[i].Usuario.id)
        }

      return res.render('index', { title: titulo_auto, 
        descripcion: descripcion_auto,
        comentarios : comentarios,
       imagen : imagenes,
       id : id,
       usuario_creador : usuario_creador,
       id_usuario : id_usuario
       });
    }).catch(error=>console.log(error)) 
    },

    

    searchResults: function(req,res){
      let queryString = req.query.search;

      let filtro = {
          where: {
              [Op.or]: [
                { nombre: { [Op.like]: `%${queryString}%` } },
                { descripcion: { [Op.like]: `%${queryString}%` } }
              ]
            },
          order: [["fecha_carga", "DESC"]],
          include: [{
              all: true,
              nested: true
            }],     
      }

      db.Producto.findAll(filtro) 
      .then((result) => {
           dic = {}
           dic.productos = result
           if(result != ''){
               let mensaje = 'Aqui estan los resultados de la busqueda'
               dic.mensaje = mensaje
           return res.render('search-result', [dic])
           } else {
               let mensaje = 'No hay resultados para su busqueda'
               dic.mensaje = mensaje
               return res.render('search-result', [dic])
           }
       }).catch((err) => {
          
      });
  }
};
   
   
   
   
   
      /*  let titulo_auto = []
      let descripcion_auto = []
      let comentarios = []
      let imagenes = []
      let id = []
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
      // }, 
      let associate = {
        include: [
          {association: "comentario"},
          {association: "Usuario"}
        ] 
      }
      
      db.Producto.findAll(associate).then(function (result) {
        for (let i = 0; i < result.length; i++) {
  
          titulo_auto.push(result[i].nombreProducto)
          descripcion_auto.push(result[i].descripcion)
          imagenes.push(result[i].imagen)
          id.push(result[i].id)
          comentarios.push(autos.productos[i].comentarios)
        }
  
  
        return res.render('search-results', { title: titulo_auto, 
          descripcion: descripcion_auto,
          comentarios : comentarios,
         imagen : imagenes,
         id : id
         });
      }).catch(error=>console.log(error)) */




module.exports = indexController;
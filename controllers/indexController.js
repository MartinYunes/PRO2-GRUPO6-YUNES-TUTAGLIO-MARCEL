const db = require("../database/models");
const { productos } = require("./productController");
const Op = db.Sequelize.Op;

let indexController = {
    index: function(req, res, next) {
      let associate = {
        include: [
          {association: "comentario"},
          {association: "Usuario"}
        ],
        order: [["createdAt", "DESC"]],
        limit: 16 
      }

      db.Producto.findAll(associate).then(function (result) {
      return res.render('index', { 
        result:result
       });
    }).catch(error=>console.log(error)) 
    },

    

    searchResults: function(req,res){
      let queryString = req.query.search;

      let filtro = {
        where:[
              { nombreProducto: { [Op.like]: `%${queryString}%` }, },
            ],
        order: [["createdAt", "DESC"]],
        include: [
         {association: "comentario"},
          {association: "Usuario"}
        ],     
      }

      db.Producto.findAll(filtro) 
      .then(function(result){
           if(result.length > 0 && queryString != ""){
               let mensaje = 'Aqui estan los resultados de la busqueda '
              return res.render('search-results', {
                productos : result,
                mensaje : mensaje,
                buscado : queryString
              })
           } else {
               let mensaje = 'No hay resultados para su busqueda'
               return res.render('search-results', {
                mensaje : mensaje,
                productos : result,
                buscado : queryString
               })
           }
       }).catch((err) => {
          
      });
  }
};

module.exports = indexController;
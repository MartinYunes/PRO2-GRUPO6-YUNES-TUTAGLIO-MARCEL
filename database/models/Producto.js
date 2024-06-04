module.exports = function (sequelize, dataTypes ) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        idUsuario: {
            type : dataTypes.INTEGER
        },
        nombreProducto: {
            type : dataTypes.STRING
        },
        descripcion: {
            type : dataTypes.STRING
        },
        imagen: {
            type : dataTypes.STRING
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
  	}

    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false
    }
    
    let Productos = sequelize.define(alias, cols, config);

Productos.associate = function(models) {
    Productos.belongsTo(models.Usuario, {
        as : "Usuario",
        foreignKey: "idUsuario"
    }),
    Productos.hasMany(models.Comentario,{
        as: "comentario",
        foreignKey: "idProducto"
    })
}

    return Productos;
}
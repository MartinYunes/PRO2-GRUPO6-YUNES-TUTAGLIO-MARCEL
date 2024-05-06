module.exports = function (sequelize, dataTypes ) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        idProducto: {
            type : dataTypes.INTEGER
        },
        idAutor: {
            type : dataTypes.INTEGER
        },
        comentario: {
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
        tableName: "Comentarios",
        timestamps: false,
        underscored: false
    }
    
    let Comentario = sequelize.define(alias, cols, config);
    return Comentario;
}
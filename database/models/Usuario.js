const { usuario } = require("../../db");

module.exports = function (sequelize, dataTypes ) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        email: {
            type : dataTypes.STRING
        },
        contrasenia: {
            type : dataTypes.STRING
        },
        fecha: {
            type : dataTypes.DATE
        },
        dni: {
            type : dataTypes.INTEGER
        },
        fotoPerfil: {
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
        },
        usuario: {
            type : dataTypes.STRING
        }
  	}

    let config = {
        tableName: "Usuarios",
        timestamps: false,
        underscored: false
    }
    
    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}
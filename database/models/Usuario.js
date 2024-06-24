const { usuario } = require("../../db");

module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        fotoPerfil: {
            type: dataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
        usuario: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: false
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "idUsuario",
        }),
            Usuario.hasMany(models.Comentario, {
                as: "comentario",
                foreignKey: "idAutor"
            })
    }
    return Usuario;
}
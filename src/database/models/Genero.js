module.exports = function (sequelize, dataTypes) {
    let alias = "Genero";
    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        nombre: {
                type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "generos",
        timestamps: false
    }
    
    let Genero = sequelize.define(alias, cols, config);
    return Genero;
}
module.exports = function (sequelize, dataTypes) {
    let alias = "Idioma";
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
        tableName: "idiomas",
        timestamps: false
    }
    
    let Idioma = sequelize.define(alias, cols, config);
    return Idioma;
}
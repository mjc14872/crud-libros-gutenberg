module.exports = function (sequelize, dataTypes) {
    let alias = "Formato";
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
        tableName: "formatos",
        timestamps: false
    }
    
    let Formato = sequelize.define(alias, cols, config);
    return Formato;
}
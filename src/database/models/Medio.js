module.exports = function (sequelize, dataTypes) {
    let alias = "Medio";
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
        tableName: "medios",
        timestamps: false
    }
    
    let Medio = sequelize.define(alias, cols, config);
    return Medio;
}
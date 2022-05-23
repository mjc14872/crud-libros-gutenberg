module.exports = function (sequelize, dataTypes) {
    let alias = "Libro";
    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        titulo: {
                type: dataTypes.STRING
        },
        autor: {
                type: dataTypes.STRING
        },
        editorial: {
            type: dataTypes.STRING
        },
        precio_unitario: {
            type: dataTypes.FLOAT
        },
        descuento: {
            type: dataTypes.TINYINT
        },
        bestSeller: {
            type: dataTypes.TINYINT
        },
        resenia: {
            type: dataTypes.TEXT
        },
        paginas: {
            type: dataTypes.INTEGER
        },
        peso: {
            type: dataTypes.INTEGER
        },
        edicion: {
            type: dataTypes.INTEGER
        },
        isbn: {
            type: dataTypes.INTEGER
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        generos_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "libros",
        timestamps: false
    }
    
    let Libro = sequelize.define(alias, cols, config);

    Libro.associate = function(models) {
        Libro.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "generos_id"
        });

        Libro.belongsTo(models.Idioma, {
            as: "idioma",
            foreignKey: "idiomas_id"
        });

        Libro.belongsTo(models.Formato, {
            as: "formato",
            foreignKey: "formatos_id"
        });

        Libro.belongsTo(models.Medio, {
            as: "medio",
            foreignKey: "medios_id"
        });

        // mas relaciones aquí a partir de la línea 69
    }

    return Libro;
}
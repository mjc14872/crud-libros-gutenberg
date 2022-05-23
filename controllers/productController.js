let db = require("../src/database/models");


//Crear el Controller del producto. 
const productController = {

    detalleProducto: function(req, res){
        // let products = findAll()
        //     let id = req.params.id
        //     let producto = products.find(producto => producto.id == id)
        //     res.render('detalle-producto', {producto: producto})
        // }
        db.Libro.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "formato"},
                      {association: "idioma"}, {association: "medio"}]
        })
        .then(function(producto) {
            res.render("detalle-producto", {producto});
        })
    },

	create: function(req, res){
        db.Genero.findAll()
        .then(function(generos) {
            db.Idioma.findAll()
                .then(function(idiomas) {
                    db.Formato.findAll()
                        .then(function(formatos) {
                            db.Medio.findAll()
                                .then(function(medios) {
                                    return res.render("crear-producto", {idiomas, generos, formatos, medios});
                                })
                        })
                })
        })
    },

	store: function(req, res){
        console.log('Por guardar '+req.body.titulo+' '+req.body.autor+' '+req.body.editorial+' '+req.body.resenia);
        db.Libro.create({
            titulo: req.body.titulo,
            autor:req.body.autor,
            editorial: req.body.editorial,
            precio_unitario: req.body.preciounitario,
            descuento: req.body.descuento,
            bestSeller: req.body.bestseller,
            resenia: req.body.resenia,
            paginas: req.body.paginas,
            peso: req.body.peso,
            edicion: req.body.edicion,
            isbn: req.body.isbn,
            cantidad: req.body.cantidad,
            imagen: req.body.imagen,
            generos_id: req.body.genero,
            idiomas_id: req.body.idioma,
            formatos_id: req.body.formato,
            medios_id: req.body.medio
        });
        console.log('Redirigiendo a product...');
        res.redirect("/product");
    },
    listar: function(req, res) {
        db.Libro.findAll()
            .then(function(libros){
                res.render("listado-productos", {libros:libros})
            })
    },
    detalle_admin: function(req, res) {
        // console.log(req.params.id);
        db.Libro.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "formato"},
                      {association: "idioma"}, {association: "medio"}]
        })
            .then(function(libro) {
                res.render("detalle_admin", {libro});
            })
    
    },

    editar: function(req, res) {
        let pedidoLibro = db.Libro.findByPk(req.params.id);
        let pedidoGenero = db.Genero.findAll();
        let pedidoIdioma = db.Idioma.findAll();
        let pedidoFormato = db.Formato.findAll();
        let pedidoMedio = db.Medio.findAll();

        Promise.all([pedidoLibro, pedidoGenero, pedidoIdioma, pedidoFormato, pedidoMedio])
            .then(function([libro, generos, idiomas, formatos, medios]){
                res.render("editar_admin", 
                {libro, generos, idiomas, formatos, medios});
            })
    },
    actualizar: function(req, res){
        db.Libro.update({
            titulo: req.body.titulo,
            autor: req.body.autor,
            editorial: req.body.editorial,
            precio_unitario: req.body.preciounitario,
            descuento: req.body.descuento,
            bestSeller: req.body.bestseller,
            resenia: req.body.resenia,
            paginas: req.body.paginas,
            peso: req.body.peso,
            edicion: req.body.edicion,
            isbn: req.body.isbn,
            cantidad: req.body.cantidad,
            imagen: req.body.imagen,
            generos_id: req.body.genero,
            idiomas_id: req.body.idioma,
            formatos_id: req.body.formato,
            medios_id: req.body.medio
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/product/" + req.params.id);
    },
    borrar: function(req, res) {
        db.Libro.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/product");
    }

        
}

//Exportar el modulo
module.exports = productController;
const peliculas = require('./peliculas')

const Query =
{
    peliculas: (_,__,context) => peliculas.listar ( context)
}


module.exports = {Query}

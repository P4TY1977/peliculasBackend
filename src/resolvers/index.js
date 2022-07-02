const peliculas = require('./peliculas')

const Query =
{
    peliculas: (_,__,context) => peliculas.listar ( context) /*,

   encontrarPeliculasPorTitulo: (root,args,context) => {
        const name=args;
        const listaPeliculas= (_,__,context) => peliculas.listar ( context)
        
        if (!listaPeliculas)
        return {success: false}
    return {
        const filtradas=listaPeliculas.peliculas.filter(pelicula=>pelicula.nombre.indexOf(name)!=-1)
        
        success: true, filtradas}
      
    }*/
}

const Mutation =
{
    agregarPelicula: (_, {pelicula}, context) => 
      peliculas.agregar(context, pelicula)
}


module.exports = {Query, Mutation}

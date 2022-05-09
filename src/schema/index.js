const { gql } = require('apollo-server')

const typeDefs = gql`
    type Pelicula
    {
        id: Int !
        nombre: String !
        genero: Genero !
        clasificacion: Clasificacion !      
    }

    enum Clasificacion
    {
      A
      B
      C
    }
    enum Genero
    {      
      ACCION
      ANIMACION
      AVENTURA
      DRAMA
      COMEDIA
      FICCION
      INFANTIL
      MISTERIO
      TERROR
    }


    type RespuestaPeliculas
    {
        success: Boolean !
        peliculas: [ Pelicula ! ]  # no nulo si success == true
    }

    type Query
    {
        peliculas: RespuestaPeliculas !

        encontrarPeliculasPorTitulo( name: String! ): [ Pelicula ! ]
      
    }
`
module.exports = typeDefs

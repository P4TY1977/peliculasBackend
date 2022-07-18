const { gql } = require('apollo-server')

const typeDefs = gql`
    type Pelicula
    {
        id: ID !
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
    
    input InputNuevaPelicula
    {
       id: ID!
       nombre: String !
    }

    type RespuestaAgregar
    {
        success: Boolean !
      id  : ID #no nulo si es success == true

    }

    
    type Mutation
    {
      agregarPelicula(pelicula: InputNuevaPelicula !): RespuestaAgregar !
    }
    type Query
    {
        peliculas: RespuestaPeliculas !

        encontrarPeliculasPorTitulo( name: String! ): [ Pelicula ! ]
      
    }
`
module.exports = typeDefs

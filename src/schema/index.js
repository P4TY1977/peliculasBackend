const { gql } = require('apollo-server')

const typeDefs = gql`
    type Pelicula
    {
        id: Int !
        nombre: String !
    }


    type RespuestaPeliculas
    {
        success: Boolean !
        peliculas: [ Pelicula ! ]  # no nulo si success == true
    }

    type Query
    {
        peliculas: RespuestaPeliculas !
      
    }
`
module.exports = typeDefs

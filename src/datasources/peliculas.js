const {DataSource}=require ('apollo-datasource')

const database = require ('../database')

class PeliculasDataSource extends DataSource
{
    initialize(config)
    { this.context = config.context}

    listar(){
        const sql='SELECT id, nombre, genero, clasificacion FROM peliculas'

        return database.withPool(connection =>
            database.select(connection, sql)
            )
       
    }
}

module.exports = PeliculasDataSource
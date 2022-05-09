const {DataSource}=require ('apollo-datasource')

const database = require ('../dataBase')

class PeliculasDataSource extends DataSource
{
    initialize(config)
    { this.context = config.context}

    listar(){
        const sql='SELECT id, nombre FROM peliculas'

        return database.withPool(connection =>
            database.select(connection, sql)
            )
       
    }
}

module.exports = PeliculasDataSource
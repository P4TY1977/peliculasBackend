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
    agregar( {id, nombre} )
    {
        //console.warn('id recibido', id)
        const sql = `INSERT INTO peliculas (id, nombre) VALUES ( ${ id }, '${ nombre }')`

        return database.withTransaction (async connection =>{
            await database.update(connection,sql)
            //console.warn('regreso', id)
            return id
        })
    }
}

module.exports = PeliculasDataSource
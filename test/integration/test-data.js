const fs = require ('fs')

const database = require ('../../src/database')

const TABLAS = [ 'peliculas']

const insertSqlFor =(base, entidad)=>
{
    const fileName = `${base}/database/${entidad}.sql`

    return fs.readFileSync(fileName,'utf-8')
}

const cargarDatos =(base=".")=>
{
    return database.withPool(connection =>{
        const borrarDatos = entidades =>
        {
            const length = entidades.length

            if (!length)
                return Promise.resolve()
            return connection.query (`DELETE FROM ${ entidades [length -1]}`)
            .then(()=> borrarDatos(entidades.slice(0,length -1)))
        }

        const insertarDatos = entidades =>{
            if (!entidades.length)
                return Promise.resolve()
            return connection.query (insertSqlFor(base, entidades[0]))
            .then(()=> insertarDatos(entidades.slice(1)))
        }
        return borrarDatos(TABLAS).then(()=>insertarDatos( TABLAS ))
    })
}

module.exports = {cargarDatos}
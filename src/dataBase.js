const mysql = require('promise-mysql')

let database

async function init()
{
    database = await mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'g@t0P4to',
        database: 'peliculas-test'
    })
}

async function withPool(callback)
{
    let connection
    try {
        connection = await database.getConnection()
        return callback(connection)
        
    } 
    finally {
      if(connection)
        await connection.release()
    }
}

async function select (connection, sql)
{
    const resultados = await connection.query(sql)
    return resultados.map(renglon=>({...renglon}))
}

const end = () => {
    database.end()
    testServer.end()  //Preguntarle a San de donde es este testServer
}

module.exports=
{
    init,
    end,
    withPool,
    select
}
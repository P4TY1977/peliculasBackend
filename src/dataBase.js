const mysql=require('promise-mysql')

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

module.exports=
{
    init,
    end: () => database.end(),
    withPool,
    select
}
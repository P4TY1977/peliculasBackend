const mysql=require('promise-mysql')

const config = require ('./config')

let database

async function init()
{
    database = await mysql.createPool({
        connectionLimit: config.MYSQL_CONNECTION_LIMIT,
        host: config.MYSQL_HOSTNAME,
        user: config.MYSQL_USER,
        password: config.MYSQL_PASSWORD,
        database: config.MYSQL_DATABASE
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

async function withTransaction(callback){
    let connection
    try
    {
        connection = await database.getConnection()
        try
        {
            const resultado =await callback (connection)
            await connection.commit()
            return resultado
        }
        catch(error)
        {
            await connection.rollback()
            throw error
        }
    }
    finally
    {
        if(connection)
           await connection.release()
    }
}
async function select (connection, sql)
{
    const resultados = await connection.query(sql)
    return resultados.map(renglon=>({...renglon}))
}

async function update(connection,sql)
{
    await connection.query(sql)
    return true
}

module.exports=
{
    init,
    end: () => database.end(),
    withPool,
    withTransaction,
    select,
    update,
}
const database=require('./dataBase')
const { server } = require( './server' )

const SERVER_PORT = 4000

database.init().then(()=>server.listen(SERVER_PORT).then(({ url }) =>
{
    console.log( `Servidor ejecutando en ${url}` )
}))


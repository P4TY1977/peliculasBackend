const { server } = require( './server' )

const SERVER_PORT = 4000

server.listen(SERVER_PORT).then(({ url }) =>
{
    console.log( `Servidor ejecutando en ${url}` )
})

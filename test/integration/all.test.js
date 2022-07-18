const { cargarDatos }= require('./test-data')
const testServer = require ( './test_server' )

const peliculasListar = require( './peliculas/peliculas' )
const peliculasAgregar = require('./peliculas/agregar')

jest.setTimeout( 20000 )
describe ( 'Integration tests', () =>
{
  beforeAll( () => testServer.start() )
  beforeAll(()=> cargarDatos())
  afterAll( () => testServer.end() )

  peliculasListar.test()
  peliculasAgregar.test()
})

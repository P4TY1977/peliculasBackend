const { cargarDatos }= require('./test-data')
const testServer = require ( './test_server' )

const peliculas = require( './peliculas/peliculas' )

jest.setTimeout( 20000 )
describe ( 'Integration tests', () =>
{
  beforeAll( () => testServer.start() )
  beforeAll(()=> cargarDatos())
  afterAll( () => testServer.end() )

  peliculas.test()
})

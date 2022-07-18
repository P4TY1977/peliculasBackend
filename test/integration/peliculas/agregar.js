const { toPromise } = require( 'apollo-link' )
const { expect } = require( 'chai' )
const gql = require( 'graphql-tag' )

const { listarPeliculas } = require ('./peliculas')

const testServer = require('../test_server')

const AGREGAR_PELICULA = gql`
  mutation AgregarPelicula($pelicula: InputNuevaPelicula!)
  {
      agregarPelicula(pelicula: $pelicula)
      {
        success, id
      }
  }
`
const test = () => describe( 'peliculas', () =>
{
   it('debe agregar una pelicula', async () =>
   {
      const pelicula={id:'3', nombre: 'Star wars'}
      const result = await toPromise( testServer.get().execute(
        { query: AGREGAR_PELICULA, 
          variables: {pelicula} 
        })
      )

      //console.warn(JSON.stringify(result))
      expect( result ).to.be.ok
      //console.warn(JSON.stringify(result))
      expect( result.data.agregarPelicula ).to.be.ok
      
      const datos = result.data.agregarPelicula
      expect( datos.success ).to.be.true
      expect( datos.id ).to.equal('3')

      const resultListado =  await listarPeliculas()
      expect(resultListado).to.be.ok
      const {peliculas}=resultListado.data.peliculas
      expect(peliculas.length).to.equal(3)
      expect(peliculas[2]).to.deep.equal({id: '3', nombre: 'Star wars'})
   })
})

module.exports = { test }

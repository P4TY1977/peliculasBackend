const { toPromise } = require( 'apollo-link' )
const { expect } = require( 'chai' )
const gql = require( 'graphql-tag' )

const testServer = require('../test_server')

const PELICULAS = gql`
  query peliculas
  {
      peliculas
      {
        success,
        peliculas { id, nombre }
      }
  }
`
const test = () => describe( 'peliculas', () =>
{
   it('debe listar peliculas', async () =>
   {
      const result = await toPromise( testServer.get().execute({ query: PELICULAS }))

      expect( result ).to.be.ok
      expect( result.data.peliculas ).to.be.ok

      const datos = result.data.peliculas
      expect( datos.success ).to.be.true
      expect( datos.peliculas ).to.deep.equal(
        [
          { id: 1, nombre: 'Bambi'},
          { id: 2, nombre: 'Pesadilla en la calle del infierno'}
        ]
      )
   })
})

module.exports = { test }

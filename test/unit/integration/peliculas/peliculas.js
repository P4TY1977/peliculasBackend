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
        peliculas { id, nombre, genero, clasificacion, img }
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
          {"id": 1, "nombre":"El rostro","genero":"DRAMA","clasificacion":"C","img":"/images/elRostro.jpg"},
          {"id": 2, "nombre":"El abogado del diablo","genero":"FICCION","clasificacion":"C","img":"/images/abogadoDiablo.jpg"},
          {"id": 3, "nombre":"Intocable","genero":"COMEDIA","clasificacion":"C","img":"/images/intocable.jpg"},
          {"id": 4, "nombre":"El Padre","genero":"DRAMA","clasificacion":"C","img":"/images/elPadre.jpg"},
          {"id": 5, "nombre":"Persona","genero":"DRAMA","clasificacion":"C","img":"/images/persona.jpg"},
          {"id": 6, "nombre":"LEGO Star Wars: Cuentos Escalofriantes","genero":"ANIMACION","clasificacion":"A","img":"/images/legostarwars.jpg"},
          {"id": 7, "nombre":"Bambi","genero":"INFANTIL","clasificacion":"A","img":"/images/bambi.jpg"},
          {"id": 8, "nombre":"Rambo","genero":"ACCION","clasificacion":"B","img":"/images/rambo.jpg"},
          {"id": 9, "nombre":"Jumanji","genero":"ACCION","clasificacion":"B","img":"/images/jumanji.jpg"},
          {"id": 10, "nombre":"Pesadilla en la calle del infierno","genero":"TERROR","clasificacion":"B","img":"/images/pesadillaInfierno.jpg"},
          {"id": 11, "nombre":"Harry Potter y la piedra filosofal","genero":"AVENTURA","clasificacion":"A","img":"/images/harrypotter.jpg"},
          {"id": 12, "nombre":"Harry Potter y la cámara secreta","genero":"AVENTURA","clasificacion":"A","img":"/images/harrypottercamara.jpg"},
          {"id": 13, "nombre":"LEGO Batman","genero":"ANIMACION","clasificacion":"A","img":"/images/legobatman.jpg"},
          {"id": 14, "nombre":"Coraline y la puerta secreta","genero":"MISTERIO","clasificacion":"A","img":"/images/coraline.jpg"},
          {"id": 15, "nombre":"Uuups!","genero":"ANIMACION","clasificacion":"A","img":"/images/upss.jpg"},
          {"id": 16, "nombre":"Viernes 13","genero":"TERROR","clasificacion":"C","img":"/images/viernes13.jpg"},
          {"id": 17, "nombre":"XXX","genero":"ACCION","clasificacion":"B","img":"/images/xxx.jpg"},
      ]
        
      )
   })
})

module.exports = { test }

const chai = require ('chai')
const {expect}= chai
const PeliculasDataSource = require ('../../../src/datasources/peliculas')

describe('PeliculasDataSource',() =>{
    describe('listar',()=>{
        it ('debe listar peliculas', async()=>
        {
            const peliculas = new PeliculasDataSource()
            const listado = await peliculas.listar()

            expect(listado).to.deep.equal(
                [
                    {id: 1, nombre:'Bambi'},
                    {id: 2, nombre:'Pesadilla en la calle del infierno'},
                ]
            )
        })
    })
})
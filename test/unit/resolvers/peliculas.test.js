const chai = require ('chai')
const { isType } = require('graphql')
const resolvers = require('../../../src/resolvers')
const sinon = require('sinon')
const {expect}=chai
chai.use(require('sinon-chai'))
describe('Resolvers / peliculas',()=>
{
    let dataSources
    beforeEach(()=>
    {
        dataSources =
        {
            peliculas:
            {
                listar:()=> Promise.resolve(
                    [
                        {id: 1, nombre:'Bambi'},
                        {id: 2, nombre:'Pesadilla en la calle del infierno'},
                    ]
                )
            }
        }
    })

    afterEach(() => sinon.restore())

    describe('listar',()=>{
        it('debe listar peliculas', async()=>
    {
        const result = await resolvers.Query.peliculas(null,null,{dataSources})

        expect(result).to.deep.equal({
            success: true,
            peliculas: [
                { id: 1, nombre: 'Bambi'},
                { id: 2, nombre: 'Pesadilla en la calle del infierno'}
            ]
        })
    })
    })
    describe('agregar', () =>
    {
        const pelicula = { id: '10', nombre: 'star wars'}
        it('debe agregar pelicula', async()=>
        {
            dataSources.peliculas.agregar = sinon.stub().resolves('10')

            const result = await  resolvers.Mutation.agregarPelicula(null, pelicula,{dataSources})

            expect (dataSources.peliculas.agregar).to.have.been.calledOnce
            expect(result).to.deep.equal({success: true, id: '10'})
        })
    })
    
})

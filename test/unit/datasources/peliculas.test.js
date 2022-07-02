const chai = require ('chai')
const sinon=require('sinon')


const {expect}= chai

const database=require('../../../src/database')
const PeliculasDataSource = require ('../../../src/datasources/peliculas')
chai.use(require('sinon-chai'))
describe('PeliculasDataSource',() =>{
    let connection, source
    beforeEach(()=>{
        connection={}
        sinon.stub (database, 'withPool').callsFake(callback=>callback(connection))
        sinon.stub (database, 'withTransaction').callsFake(callback => callback(connection))
        source = new PeliculasDataSource();
    })
    afterEach(() => sinon.restore())
    describe('listar',()=>{
       

        

        describe('listar', ()=>
        it ('debe listar peliculas', async()=>
        {
            connection.query = sinon.stub().resolves([{ id:1 }])
            const listado= await source.listar()
            expect(listado).to.deep.equal([{ id:1 }])
        })
        )
    })
    describe ('agregar', ()=>{
        it ('debe agregar pelicula', async()=>{
            connection.query=sinon.stub().resolves([{id: 1}])

           const id = await source.agregar({id:'10', nombre:'star wars'})

            expect(id).to.equal('10')
        })
    })
})
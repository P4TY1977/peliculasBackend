const chai = require ('chai')
const sinon=require('sinon')


const {expect}= chai

const database=require('../../../src/database')
const PeliculasDataSource = require ('../../../src/datasources/peliculas')
chai.use(require('sinon-chai'))
describe('PeliculasDataSource',() =>{
    describe('listar',()=>{
        let connection, source
        beforeEach(()=>{
            connection={}
            sinon.stub (database, 'withPool').callsFake(callback=>callback(connection))
            source = new PeliculasDataSource();
        })
        describe('listar', ()=>
        it ('debe listar peliculas', async()=>
        {
            connection.query = sinon.stub().resolves([{ id:1 }])
            const listado= await source.listar()
            expect(listado).to.deep.equal([{ id:1 }])
        })
        )
    })
})
const {DataSource}=require ('apollo-datasource')
class PeliculasDataSource extends DataSource
{
    initialize(config)
    { this.context = config.context}

    listar(){
        return Promise.resolve(
            [
                {id: 1, nombre:'Bambi'},
                {id: 2, nombre:'Pesadilla en la calle del infierno'},
            ]
        )
    }
}

module.exports = PeliculasDataSource
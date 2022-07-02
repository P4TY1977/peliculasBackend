const listar = async ({dataSources})=>
{
    const peliculas = await dataSources.peliculas.listar()

    if (!peliculas)
        return {success: false}
    return {success: true, peliculas}
}

const agregar = async ( {dataSources}, pelicula)=>
{
    const id = await dataSources.peliculas.agregar( pelicula )

    if (!id)
        return {success: false}
    return {success: true, id}
}

module.exports ={agregar, listar}

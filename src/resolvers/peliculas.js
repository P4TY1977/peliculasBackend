const listar = async ({dataSources})=>
{
    const peliculas = await dataSources.peliculas.listar()

    if (!peliculas)
        return {success: false}
    return {success: true, peliculas}
}
module.exports ={listar}

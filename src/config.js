module.exports=
{
   MYSQL_HOSTNAME: process.env.MYSQL_HOSTNAME || 'localhost',
   MYSQL_USER    : process.env.MYSQL_USER     || 'root',
   MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'g@t0P4to',
   MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'peliculas_test',
   MYSQL_CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT|| 10
}
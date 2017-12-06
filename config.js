module.exports = {
  //Usar variables de entorno o el puerto 3000 por default
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://localhost:27017/hotels'
}

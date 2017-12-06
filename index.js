'use strict'

/*Ene este archivo va todo lo relacionado a la base datos*/

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

//Conectar con la base de datos
mongoose.connect(config.db, (err, res) =>{
  if(err){
    return console.log('Error connectando con la base datos :' +err);
  }
  console.log('Conectado a la base de datos');
  //Iniciar el servidor
  app.listen(config.port, () => {
      console.log(`Servidor escuchando en http://localhost:${config.port}`)
    })

});

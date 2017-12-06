'use strict'

const express = require('express')

//importar el controlador
const hotelsCtrl = require('../controllers/hotels')

//Configurar las URL de cada funcion en el controlador
var hotelsRute = express.Router()

hotelsRute.route('/hotels').get(hotelsCtrl.findAllHotels)
hotelsRute.route('/newhotel').post(hotelsCtrl.createNewHotel);

hotelsRute.route('/hotel/:hotelid')
  .get(hotelsCtrl.findHotelById)
  .delete(hotelsCtrl.deleteHotel)
  .put(hotelsCtrl.updateHotel)

module.exports = hotelsRute

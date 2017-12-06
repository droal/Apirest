'use strict'

var Hotel = require('../models/hotel')

//Funcion que consulta toda la coleccion de hoteles
//GET http://localhost:3000/api/hotels
exports.findAllHotels = (req, res) => {
	//Se debe buscar por hotels y no por hotel ya que mongoose crea la coleccion en plural
	Hotel.find({}, (err, hotels) => {
    if(err) {
			console.log("Controller findAllHotels err : "+err)
			return res.status(500).send({message: 'Eror en consulta'})
		}
		if(!hotels) {
      console.log('La consulta findAllHotels no arroja resultados')
      return res.status(404).send({message:"No hay hoteles"})
    }
    res.status(200).jsonp(hotels)
	})
}


//Funcion que consulta un hotel por su identificador
//GET http://localhost:3000/api/hotel/id
exports.findHotelById = (req, res) => {
	let hotelid = req.params.hotelid

	Hotel.findById(hotelid, (err, hotel) =>{
    if(err){
			console.log("Controller findHotelById err : "+err)
      return res.status(500).send({message: "Err en consulta"})
    }
    if(!hotel){
			console.log('La consulta findHotelById no arroja resultados')
      return res.status(404).send({message: "No se encuentran coincidencias"})
    }
    res.status(200).send({hotel})
  })
}

//Funcion que crea un hotel en la base de datos
//POST http://localhost:3000/api/newhotel/?name=Marriott&stars=4&cost=5000&photo=http://photo3&commentaries=muy bueno&punctuation=5
exports.createNewHotel = (req, res) => {

	let hotel = new Hotel()
  hotel.name					= req.body.name
  hotel.stars					= req.body.stars
  hotel.cost					= req.body.cost
  hotel.photo					= req.body.photo
  hotel.commentaries	= req.body.commentaries
  hotel.location			= req.body.location

  hotel.save((err, hotelStored) => {
    if(err){
			console.log("Controller createNewHotel err : "+err)
      res.status(500).send("Error al crear el nuevo hotel : "+err )
    }
    res.status(200).send({hotel: hotelStored})
  })
}


//Funcion que elimina el hotel segun identificador de la base de datos
//DELETE http://localhost:3000/api/hotel/id
exports.deleteHotel = (req,res) =>{
	let hotelid = req.params.hotelid

	Hotel.findById(hotelid, (err, hotel) => {
		hotel.remove((err) =>{
			if(err){
				console.log("Controller deleteHotel err : "+err)
	      res.status(500).send("Error eliminando el registro : "+err )
			}
			res.status(200).send("Hotel eliminado")
		})
	})
}

//Funcion que actualiza los campos de un hotel
//PUT http://localhost:3000/api/hotel/id
exports.updateHotel = (req, res) =>{
	let hotelid = req.params.hotelid

	Hotel.findById(hotelid, (err, hotel) =>{
		hotel.name					= req.body.name
	  hotel.stars					= req.body.stars
	  hotel.cost					= req.body.cost
	  hotel.photo					= req.body.photo
	  hotel.commentaries	= req.body.commentaries
	  hotel.location		= req.body.location

		hotel.save((err) => {
	    if(err){
				console.log("Controller updateHotel err : "+err)
	      res.status(500).send("Error actualizando el hotel : "+err )
	    }
	    res.status(200).send("Hotel actualizado")
	  })
	})
}

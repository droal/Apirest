'use strict'

/*En este archivo va todo lo relacionado con express y configuracion de rutas*/

//importar librerias
const express = require('express')
const bodyParser = require('body-parser')
const rutes = require('./rutes')

//crear instancia de express
const app = express()

//Configurar express para el uso del formato json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api',rutes)
module.exports = app

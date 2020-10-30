const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')


const SessionController = require('./controller/SessionController')
const SpotController = require('./controller/SpotController')
const DashController = require('./controller/DashboardController')
const BookingController = require('./controller/BookingController')


const routes = express.Router();
const upload = multer(uploadConfig)


//Criar uma sessão
routes.post('/sessions', SessionController.store)

//Listar um Spots
routes.get('/spots', SpotController.index)

//Criar um Spots
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

//Listar dash
routes.get('/dashboard', DashController.show)

//Criando uma reserva
routes.post('/spots/:spot_id/bookings', BookingController.store)


module.exports = routes
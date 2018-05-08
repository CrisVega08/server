'use strict'

const express = require('express')
const routes = express.Router()
const hotel = require('../controllers/hotel')

// Hotel's Routes 
routes.get('/hotels', hotel.getAll)
routes.get('/hotel/:id', hotel.get)
routes.get('/search', hotel.search)
routes.get('/hotel/image/:img', hotel.image)

module.exports = routes;
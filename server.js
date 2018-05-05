'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
    // Carga de rutas
const _Routes = require('./Routes/routing')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// configurar headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization, Referrer')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, POST, DELETE')

    next()
})

app.use(_Routes)

module.exports = app;
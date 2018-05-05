'use strict'

require('./config/config');

const port = process.env.PORT || 3001
const mongoose = require('./db/mongoose').connectDB
const server = require('./server')

mongoose.then(() => {
        server.listen(port, () => {
            console.log(`el servidor esta funcionando en localhost:${port}`);
        })
    })
    .catch((e) => console.log("No se puede conectar" + e))

module.exports = server;
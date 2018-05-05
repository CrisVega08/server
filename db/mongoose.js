const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
module.exports.connectDB = mongoose.connect(process.env.MONGODB_URI)
'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema

var hotelsSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    stars: { type: Number, required: true },
    price: Schema.Types.Decimal128,
    image: { type: String, required: true },
    amenities: [String]
});

module.exports = mongoose.model('hotels', hotelsSchema);
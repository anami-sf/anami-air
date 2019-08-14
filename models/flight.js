const mongoose =require('mongoose')

const flightSchema = new mongoose.Schema({
    airline: String,
    flightNo: Number,
    departs: Date
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConcertSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    venue: String,
    date: String,
    id: String,
    time : String,
    details: String 
})

module.exports = Concert = mongoose.model('concert', ConcertSchema)
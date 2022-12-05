const mongoose = require('mongoose'); 

const event = mongoose.model('event' ,  { 

    title: String, 
    description: String, 
    date: Date ,
    address : String,
    image: String 


} ) 

module.exports = event;
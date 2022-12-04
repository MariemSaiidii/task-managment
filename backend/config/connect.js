const mongoose = require('mongoose');


mongoose.connect( 'mongodb://127.0.0.1:27017/pikoro-event-managment' )
    .then(
        ()=>{
            console.log('connected to the DB :p');
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )
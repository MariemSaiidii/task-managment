const express = require('express');
const cors = require('cors');
require('./config/connect');

const EventRoute = require('./routes/event');




const app = express();
app.use(express.json());
app.use(cors());

app.use('/event', EventRoute);
app.use('/getimage' , express.static('./uploads'));//get the image 


app.listen( 3000, ()=>{
    console.log('my pikoro server is work !!  :)');
} )
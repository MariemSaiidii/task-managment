const express = require('express');
const event= require('../models/event');
const router = express.Router();




// upload image config

const multer = require('multer');

filename = '';
const myStorage = multer.diskStorage( {

    destination: './uploads',
    filename: (req, file , redirect)=>{

        let fl = Date.now() + '.' + file.mimetype.split('/')[1];
        filename = fl;
        redirect(null , fl );//redirect the image to the folder 

    }

} )

const upload = multer({ storage: myStorage });

// end config upload
router.post('/add',upload.any('image'),(req,res)=>{
   let data = req.body;
   let evnt = new event(data)
   evnt.image = filename;
   evnt.save()
       .then(
           (result)=>{
               filename = '';
               res.send(result);
           }
       )
       .catch(
           (err)=>{
               res.send(err);
           }
       )
})


router.get('/all' , (req,res)=>{

    event.find().sort( { date: 1 })
   
       .then(
           (result)=>{
               res.send(result);
           }
       )
       .catch(
           (err)=>{
               res.send(err);
           }
       )
   
})




router.get('/getById/:id',(req,res)=>{
   let id = req.params.id;
   event.findById({ _id: id })
       .then(
           (result)=>{
               res.send(result);
           }
       )
       .catch(
           (err)=>{
               res.send(err);
           }
       )    
})

router.get('/getbydate/:date', (req , res)=>{
    let datee =req.params.date ;
    event.find( { date : { $eq:  new Date(datee) } })
    .then(
        (result)=>{
            res.send((result));
        }
    )
    .catch(
        (err)=>{
            res.send(err);
        }
    )    
})
router.get('/getdate', (req , res)=>{
    event.aggregate( [ { $project : { _id: 0 , date : 1} } ] )
    .then(
        (result)=>{
            res.send(result);
        }
    )
    .catch(
        (err)=>{
            res.send(err);
        }
    )    
})


router.delete('/delete/:id',(req,res)=>{
   let id = req.params.id;

   event.findByIdAndDelete({ _id:id })
       .then(
           (result)=>{
               res.send(result);
           }
       )
       .catch(
           (err)=>{
               res.send(err);
           }
       )
})




router.put('/update/:id',upload.any('image'),(req,res)=>{
   let id = req.params.id;
   let newData = req.body;

   if(filename.length > 0){
       newData.image = filename;
   }
   event.findByIdAndUpdate( { _id: id } , newData )
       .then(
           (result)=>{
               filename = '';
               res.send(result);
           }
       )
       .catch(
           (err)=>{
               res.send(err);
           }
       )

})


module.exports = router;
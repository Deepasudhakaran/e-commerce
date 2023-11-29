const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {AddModel} = require('./models/productss')




const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


  app.post('/create',async(req ,res)=>{
    try{
      const {title,price,image,rate} = req.body;
      const product = new AddModel({title,price,image});
      await product.save();
      res.status(201).json({message :"user creater successfully"})
    }
    catch(error){
      console.error(error);
      res. status(500).json({error: "internal server error"})
    }
  })
  

  app.get('/create', (req, res) => {
    AddModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
   });




   app.get('/create/:id', (req,res)=> {
    const id= req.params.id
    AddModel.findById(id)
    .then(users => res.json(users))
    .catch(err => res.json(err))
    });

  app.listen(8080, ()=>{
    console.log("server started")
  })
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { json } = require('express');


const app = express();

app.use(json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/bmiDB' ,{useCreateIndex:true , useNewUrlParser: true, useUnifiedTopology:true} );

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB connection established');
});


const bmiSchema = mongoose.Schema({
    name: String,
    CNIC: String,
    height: Number,
    weight: Number,
    BMI:Number
})

const BMI = mongoose.model('BMI' , bmiSchema);

app.get('/' , (req,res) => {
    BMI.find().then((response) => res.json(response)).catch((err) => res.json(err))
})

app.post('/' , (req,res) => {
    let bmi = new BMI({
        name: req.body.name,
        CNIC: req.body.CNIC,
        height: req.body.height,
        weight: req.body.weight,
        BMI: req.body.BMI
    })

    console.log(bmi);

    bmi.save().then((response) => res.json(response)).catch((err) => res.json(err));


})

app.listen(5000 , () => {
    console.log('server running on port 5000')
})
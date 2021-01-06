const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

env.config();

//mongodb+srv://root:<password>@cluster0.ldkdk.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    'mongodb+srv://root:<password>@cluster0.ldkdk.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    );

app.use(bodyParser);

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Hello from the server'
    })
})

app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message:req.body
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`app is running on PORT ${process.env.PORT}`);
});
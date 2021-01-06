const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

env.config();


//mongodb+srv://root:<password>@cluster0.ldkdk.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ldkdk.gcp.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    ).then(()=>{
        console.log('Database connected');
    });
app.use(bodyParser.json());


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
const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

env.config();

app.use(bodyParser());

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
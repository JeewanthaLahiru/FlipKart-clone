const express = require('express');
const env = require('dotenv');

const app = express();

env.config();



app.listen(process.env.PORT,()=>{
    console.log(`app is running on PORT ${process.env.PORT}`);
});
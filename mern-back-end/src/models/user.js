const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
        trim : true, //remove white spaces if there is
        min : 3,
        max : 20
    },
    lastName:{
        type : String,
        required : true,
        trim : true, //remove white spaces if there is
        min : 3,
        max : 20
    },
    userName:{
        type : String,
        required : true,
        trim : true,
        unique : true,
        index : true, 
        lowercase : true
    },
    email:{
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    hash_password:{
        type : String,
        required : true,
    },
    role:{
        type : String,
        enum : ['admin', 'user'],
        default : 'user'
    },
    contactNumber:{type : String},
    profilePicture:{type : String}
}, {timestamps : true});

module.exports = mongoose.model('User',userSchema);
const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
const { check } = require('express-validator');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();


router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);

//first requireSignin is called then req,res function is called because next() function
/*router.post('/profile',requireSignin, (req, res)=>{
    res.status(200).json({user:'profile'})
})*/

module.exports = router;
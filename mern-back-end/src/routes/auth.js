const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
const { check } = require('express-validator');
const router = express.Router();


router.post('/signup',[
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 characters long')
],signup);
router.post('/signin',signin);

//first requireSignin is called then req,res function is called because next() function
/*router.post('/profile',requireSignin, (req, res)=>{
    res.status(200).json({user:'profile'})
})*/

module.exports = router;
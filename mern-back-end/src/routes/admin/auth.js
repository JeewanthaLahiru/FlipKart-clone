const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/admin/signin',signin);

//first requireSignin is called then req,res function is called because next() function
/*router.post('/profile',requireSignin, (req, res)=>{
    res.status(200).json({user:'profile'})
})*/

module.exports = router;
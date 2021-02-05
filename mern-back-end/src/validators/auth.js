const {check,validationResult} = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('first name is required'),
    check('lastname')
    .notEmpty()
    .withMessage('last name is required'),
    check('email')
    .isEmail()
    .withMessage('Valid email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('password must be at least 6 characters long')
];
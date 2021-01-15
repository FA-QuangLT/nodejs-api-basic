const { body } = require('express-validator')

exports.validate = (method) => {
    switch (method) {
        case 'create': {
            return [
                body('first_name', 'First name not exist').exists(),
                body('last_name', 'First name not exist').exists(),
                body('email', 'Invalid email').exists().isEmail(),
                body('phone').exists().isInt(),
                body('status').exists().isBoolean(),
            ]
        }
    }
}
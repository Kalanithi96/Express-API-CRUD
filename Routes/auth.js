const express = require('express')
const { signUp,
        login    
} = require('../controller/authController');
const router = express.Router()

router
    .route('/signup')
    .post(signUp);
router
    .route('/login')
    .post(login);


/* router
    .route('/:id')
    .delete(deleteOnePost)
    .patch(updateOnePost)
    .get(readOnePost); */

module.exports = router;
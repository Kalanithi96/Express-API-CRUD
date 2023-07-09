const express = require('express')
const { readAllUsers,
    deleteOneUser,
    updateOneUser,
    readOneUser,
    createNewUser} = require('./../controller/userController');
const router = express.Router()

const logger = (req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    console.log("Hi");
    next();
    //res.end(req.url);
}

router.route('/').get(logger,readAllUsers).post(createNewUser);
router.route('/:id').delete(deleteOneUser).patch(updateOneUser).get(readOneUser);

module.exports = router;
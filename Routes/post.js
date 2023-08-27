const express = require('express')
const { readAllPosts,
    deleteOnePost,
    updateOnePost,
    readOnePost,
    createNewPost} = require('../controller/postController');
const {protect} = require('./../middleware/protect');
const router = express.Router();

const logger = (req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    console.log("Hi");
    next();
    //res.end(req.url);
}

router
    .route('/')
    .get(logger,protect,readAllPosts)
    .post(protect,createNewPost);

router
    .route('/:id')
    .delete(protect,deleteOnePost)
    .patch(protect,updateOnePost)
    .get(protect,readOnePost);

module.exports = router;
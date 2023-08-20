const express = require('express')
const { readAllPosts,
    deleteOnePost,
    updateOnePost,
    readOnePost,
    createNewPost} = require('../controller/postController');
const router = express.Router()

const logger = (req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    console.log("Hi");
    next();
    //res.end(req.url);
}

router
    .route('/')
    .get(logger,readAllPosts)
    .post(createNewPost);

router
    .route('/:id')
    .delete(deleteOnePost)
    .patch(updateOnePost)
    .get(readOnePost);

module.exports = router;
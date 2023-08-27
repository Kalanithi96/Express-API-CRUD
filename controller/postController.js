const Post = require('../models/post');

const readAllPosts = async (req,res)=>{

    try{
        const data = await Post.find({})
        res.status(200).json({meassage:"Read successful", data:data});
    }catch(e){
        console.log(e);
        res.status(400);
    }
    return res;
}

const createNewPost = async (req,res)=>{
    const {title,body} = req.body;
    try{
        const New = await Post.create({"title":title,"body":body})
        res.status(200).json({message:"Post created", data:New});
    }catch(e){
        console.log(e);
        res.status(400);
    }
    return res;
}

const updateOnePost = async (req,res)=>{
    const id = req.params.id;
    const {title,body} = req.body;
    let data;
    try {
        data = await Post.findByIdAndUpdate(id,{title,body},{
            runValidators: true
        });   
        res.status(200).json({message:"Update successful", data:data});
    } catch (error) {
        console.log(error);
        res.status(400);
    }
    return res;
}

const deleteOnePost = async (req,res)=>{
    const id = req.params.id;
    try{
        const d = await Post.findByIdAndDelete(id)
        res.status(200).json({message:"Delete successful", data:data, d:d});
    }catch(e){
        res.status(400)
        console.log(e)
    }
    return res;
}

const readOnePost = async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    let data;
    try {
        data = await Post.findById(id);   
        res.status(200).json({message:"Read successful", data:data});
    } catch (error) {
        console.log(error);
        res.status(400)
    }
    return res;
}

module.exports = {
    readAllPosts,
    deleteOnePost,
    updateOnePost,
    readOnePost,
    createNewPost
};
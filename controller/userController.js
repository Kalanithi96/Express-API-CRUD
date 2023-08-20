const User = require('./../models/user');

const readAllUsers = async (req,res)=>{

    try{
        const data = await User.find({})
        res.status(200).json({meassage:"Read successful", data:data});
    }catch(e){
        console.log(e);
        res.status(400);
    }
    return res;
}

const createNewUser = async (req,res)=>{
    const {name,phone} = req.body;
    try{
        const New = await User.create({"name":name,"phone":phone})
        res.status(200).json({message:"User created", data:New});
    }catch(e){
        console.log(e);
        res.status(400);
    }
    return res;
}

const updateOneUser = async (req,res)=>{
    const id = req.params.id;
    const {name,phone} = req.body;
    let data;
    try {
        data = await User.findByIdAndUpdate(id,{name,phone},{
            runValidators: true
        });   
        res.status(200).json({message:"Update successful", data:data});
    } catch (error) {
        console.log(error);
        res.status(400);
    }
    return res;
}

const deleteOneUser = async (req,res)=>{
    const id = req.params.id;
    try{
        const d = await User.findByIdAndDelete(id)
        res.status(200).json({message:"Delete successful", data:data, d:d});
    }catch(e){
        res.status(400)
        console.log(e)
    }
    return res;
}

const readOneUser = async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    let data;
    try {
        data = await User.findById(id);   
        res.status(200).json({message:"Read successful", data:data});
    } catch (error) {
        console.log(error);
        res.status(400)
    }
    return res;
}

module.exports = {
    readAllUsers,
    deleteOneUser,
    updateOneUser,
    readOneUser,
    createNewUser
};
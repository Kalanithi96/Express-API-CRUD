const User = require('./../models/user');

const readAllUsers = async (req,res)=>{
    const data = await User.find({})
    res.status(200).json({meassage:"Read successful", data:data});
    return res;
}

const createNewUser = async (req,res)=>{
    const {name,phone} = req.body;
    const New = await User.create({"name":name,"phone":phone})
    res.status(200).json({message:"User created", data:New});
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
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({message:"Update successful", data:data});
    return res;
}

const deleteOneUser = async (req,res)=>{
    const id = req.params.id;
    const d = await User.findByIdAndDelete(id)
    res.status(200).json({message:"Delete successful", data:data, d:d});
    return res;
}

const readOneUser = async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    let data;
    try {
        data = await User.findById(id);   
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({message:"Read successful", data:data});
    return res;
}

module.exports = {
    readAllUsers,
    deleteOneUser,
    updateOneUser,
    readOneUser,
    createNewUser
};
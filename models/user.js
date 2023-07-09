const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength:[20,"Length must be less than 20 characters"]
    },
    phone:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('User', userSchema);
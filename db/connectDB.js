const mongoose = require('mongoose');
const { 
    MONGO_USER, 
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT
} = require('./../config/config');

const connectDB = (url) => {
    /* 
    For remote Mongo DB
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
    */
    const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
    
    return mongoose.connect(mongoURL ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;
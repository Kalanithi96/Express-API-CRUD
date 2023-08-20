const mongoose = require('mongoose');
const { 
    MONGO_USER, 
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT
} = require('./../config/config');

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectDB = (url) => {
    
    //For remote Mongo DB
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
   

    /* return mongoose.connect(mongoURL ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) */
}

const connectWithRetry = () => {
    mongoose.connect(mongoURL ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected"))
    .catch((e) => {
        console.log(e)
        setTimeout(connectWithRetry, 5000)
    });
}

module.exports = connectDB;
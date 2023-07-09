require('dotenv').config();
const express = require('express');
const app = express()
const connectDB = require('./db/connectDB')
const user = require('./Routes/user.js');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/user',user);

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
            .then(()=>console.log("Connected to MongoDB!!!"));
        app.listen(2000, () => {
            console.log("Listening at port 2000...")
        });
    }catch(err){
        //console.log(err);
    }
}

start();
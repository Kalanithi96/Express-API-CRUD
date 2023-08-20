require('dotenv').config();
const express = require('express');
const app = express()
const connectDB = require('./db/connectDB')
const user = require('./Routes/user.js');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/user',user);

app.get('/',(req,res)=>{
    res.send('Hi!!');
})

const start = async()=>{
    const port = (process.env.MONGO_URI)?process.env.MONGO_URI:2000;
    try{
        await connectDB(process.env.MONGO_URI)
            .then(()=>console.log("Connected to MongoDB!!!"));
        app.listen(port, () => {
            console.log(`Listening at port ${port}...`);
        });
    }catch(err){
        console.log(err);
    }
}

start();


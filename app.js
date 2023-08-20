require('dotenv').config();
const express = require('express');
const app = express()
const connectDB = require('./db/connectDB')
const post = require('./Routes/post.js');
const auth = require('./Routes/auth.js');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/v1/post',post);
app.use('/api/v1/auth',auth);

app.get('/',(req,res)=>{
    res.send('Hi!!!');
})

const start = async()=>{
    const port = (process.env.PORT)?process.env.PORT:2000;
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


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const ProjectRouter = require('./routes/Project-routes')
const UserRouer = require('./routes/User-routes')


const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api',ProjectRouter)
app.use(UserRouer);


mongoose.connect(
    `mongodb+srv://ashim:ashim@cluster0.hmvjoyt.mongodb.net/?retryWrites=true&w=majority`
).then(()=>{
    app.listen(port)
    console.log("Server Running at port 5000 || Database connection Succesfully")

}).catch(()=>{
    console.log("Server running at 5000 || Database connection failed")
})

app.get('/',(req,res)=>{
    return res.send("Server is working properly")
})
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors({
    origin:'*'
}))


//DATABASE CONNECTION
try{
    mongoose.connect("mongodb+srv://panda:panda@gow.47mkc4o.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("DB conected"))
}
catch(err){
    console.log(err)
}

//ROUTES


app.get('/',(req,res)=>{
    res.send('Hello world')
})



app.post('/post_user',(req,res)=>{
    const users = require('./models/users')
    const user = new users(
        {
            name:req.body.name,
            email:req.body.email,
            photo:req.body.photo
        }
    )
    const newEmail= req.body.email;
    users.findOne({email:newEmail})
    .then((response)=>{
        if(response){
            res.send('user exists');
        }else if(!response){
            user.save()
            .then((data)=>res.send(data))
        }
    })
    .catch((err)=>res.send(err))

})

const port = 2000
app.listen(port,()=>console.log(`server running on port ${port}`))

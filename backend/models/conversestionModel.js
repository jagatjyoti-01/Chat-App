const mongoose=require('mongoose')
const conversestionModel=new mongoose.Schema({
    sender:{
       type:mongoose.Schema.ObjectId ,
       ref:USer                    
    }
})
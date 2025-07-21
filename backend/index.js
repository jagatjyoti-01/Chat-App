const express=require('express')
const cors=require('cors')
require('dotenv').config()
const connectDB=require('./config/db')


const app=express();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true

}))

const PORT=process.env.PORT ||5000;

app.get("/",(req,res)=>{
res.json({
    message:"surver is running ",
    success:true,
    error:false

})
})

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`surver is running in ${PORT}`)
})
})


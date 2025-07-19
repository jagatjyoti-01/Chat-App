const mongoose=require('mongoose')
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        const connection=mongoose.connection
        connection.on("connected",()=>{
            console.log("db connected successfull")
        })

        connection.on("error",()=>{
            console.log("something went wrong to  connect into db " ,error)
        })
        
    }catch(error){
        console.log("error in connecting in db", error )
    }
}

module.exports=connectDB
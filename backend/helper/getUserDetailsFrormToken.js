
const jwt = require('jsonwebtoken')
const userModel=require("../models/userModels")
async function getUserDetailsFrormToken(token) {

 
 
        if(!token){
            return{
                message:'session out',
                logout:'true'
            }
        }

            const decode = await jwt.verify(token,process.env.JWT_SECREAT_KEY)

    const user = await userModel.findById(decode.id).select('-password')
    // - means remove  password from the result
    
    console.log("user",user)


        return user

   
    
}

module.exports=getUserDetailsFrormToken
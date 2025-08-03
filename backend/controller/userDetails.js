const getUserDetailsFrormToken=require("../helper/getUserDetailsFrormToken")
async function userDetails(req,res){

    try{
        const token =req.cookies.token || ""
        const user=await getUserDetailsFrormToken(token)
        
        return res.status(200).json({
            message : "user details",
            data : user
        })

        

    }catch(error){
        console.log(error);
        res.status(400).json({
            message:"no userDetails found ",
            error:true,
            error
        })
    }
}

module.exports=userDetails
const userModel=require("../models/userModels")
const bcrypt = require('bcrypt');

exports.register=async (req,res)=>{
    try{
        const {name,email,password,profile_pic} =req.body
        if(!email || !password || !name){
            return res.status(400).json({msg:"Please fill in all fields"})
        }
        const exitinguser=await userModel.findOne({email});
        if(exitinguser){
            return res.status(400).json({msg:"Email already exists"})
        }

         const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);

        const payload = {
            name,
            email,
            profile_pic,
            password : hashPassword
        }

        const user=new userModel(payload)
        const usersave=await user.save()

       return res.status(201).json({
            msg:"User created successfully",
            user:usersave,
            success:true,
            data:usersave
        })

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
            err
        })
    }
}
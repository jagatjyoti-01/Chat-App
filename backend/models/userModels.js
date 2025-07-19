const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        trype: String,
        require: [true, "provided name"],
        unique: 'true'
    },
    password: {
        type: String,
        require: true,

    },
    profile_pic: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
})

const UserModel=mongoose.model("USer",userSchema)
module.exports=UserModel;
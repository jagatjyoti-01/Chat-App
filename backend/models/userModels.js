const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
    type: String,
    required: true,  // NOT "require: true"
    unique: true
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
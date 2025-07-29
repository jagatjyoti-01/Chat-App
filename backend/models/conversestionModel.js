const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    text: {
        type: String,

    },
    imageUrl: {
        type: String,
        default: "",
    },
    videoUrl: {
        type: String,
        default: "",

    },
    seen: {
        type: Boolean,
        default: false,
    },


}, {
    timestamps: true
})

const conversestionSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: USer
    },
    reciver: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: User
    },
    message: {
        type: mongoose.Schema.ObjectId,
        ref: Message
    }

})


const messageModel=mongoose.model("Message",messageSchema)
const conversectionModel = mongoose.model("Conversection", conversestionSchema)
module.exports ={ conversectionModel , messageModel}
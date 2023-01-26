import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    conversationId:{
        type:String,
    },
    senderId:{
        type:String,
    },
     receiverdId:{
            type:String,
        },
       
        type:{
            type:String,
        },
        text:{
            type:String,
        },
},{
    timestamps:true,
})

const message = mongoose.model('Message',messageSchema);

export default message;
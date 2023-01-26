import Message from "../Model/Message.js"
import Conversation from "../Model/Conversation.js";

export const newMessage = async(req,res) => {
    try{
        const newMess = new Message(req.body);
        await newMess.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        return res.status(200).json('Message has been sent successfully')
    }catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}
export const getAllMessage = async(req,res) => {
    try{
        const newMess = await Message.find({conversationId:req.params.id});
        return res.status(200).json(newMess)
    }catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}
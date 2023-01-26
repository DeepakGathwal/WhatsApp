import Conversation from "../Model/Conversation.js";
export const newConversation = async (req,res) => {
    try{
        const senderId = req.body.senderId;
        const receiverdId = req.body.receiverdId;
        const exist = await Conversation.findOne({members:{$all:[receiverdId,senderId]}});
        if (exist) {
            return res.status(200).json(`Conversation already exist`)
        }

        const newConversation = new Conversation({
            members:[senderId,receiverdId]
        })
       await newConversation.save();
        return res.status(200).json(`Conversation saved Successfully`)

    }catch(err){
        res.status(500).json(err.message)
    }
}

export  const getConversation = async(req,res) => {
    try{
        const senderId = req.body.senderId;
        const receiverdId = req.body.receiverdId;
        const exist = await Conversation.findOne({members:{$all:[receiverdId,senderId]}});
        return res.status(200).json(exist);
    }catch(err){
        res.status(500).json(err.message)
    }
}
import User from "../Model/user.js";
export const addUser = async(req,res) => {
    try{
let user = await User.findOne({sub:req.body.sub})
if(user){
    res.status(200).json({msg:"user already exist"})
    return;
}
const newUser = new User(req.body);
await newUser.save()
res.status(200).json(
    newUser
)
    }catch(err){
        res.status(500).json({
            err,
        })
    }
}

export const getUser = async (req,res,next) => {
    try{
     const user = await User.find({})
     if (!user){
        res.status(200).json({msg:"No User Found"})
        return;
     }
     res.status(200).json(
        user
    )
    }catch(err){
        res.status(500).json({
            err,   
    })
}

}
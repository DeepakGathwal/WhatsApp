import mongoose from "mongoose"

 const Connection = async() => {
    try{
await mongoose.connect(process.env.DATABASE,{useUnifiedTopology:true});
console.log("Fit");
    }catch(err){
        console.log(err);
    }
}

export default Connection

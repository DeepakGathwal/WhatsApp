import grid from 'gridfs-stream'
import mongoose from 'mongoose'
const conn = mongoose.connection;
let gfs, gridgsbucket;
conn.once('open', () => {
   gridgsbucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs')
})

const url = "http://localhost:8000"
export const uploadFile = async(req,res) => {
    try{
        if(!req.file){
            return res.status(404).json("File Not file")
        }
        const imageUrl = `${url}/file/${req.file.filename}`
        return res.status(200).json(imageUrl)
    }catch(err){
        return res.status(500).json(err.message)
    }
}
export const getFile = async(req,res) => {
    try{
        const file = await gfs.files.findOne({filename:req.params.filename});
        const readStream = gridgsbucket.openDownloadStream(file._id);
        readStream.pipe(res)
     
    }catch(err){
        return res.status(500).json(err.message)
    }
}

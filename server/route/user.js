import express from 'express'
import { getConversation, newConversation } from '../controller/Conversation.js'
import { getFile, uploadFile } from '../controller/ImageController.js'
import { getAllMessage, newMessage } from '../controller/message-controller.js'
import { addUser, getUser } from '../controller/user.js'
import  upload  from '../utils/upload.js'
const route = express.Router()

route.post("/add",addUser);
route.get("/users",getUser);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getAllMessage);
route.post('/file/upload',upload.single('file'),uploadFile);
route.get('/file/:filename', getFile);
export default route;
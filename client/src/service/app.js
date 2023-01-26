import axios from "axios";
const url = "http://localhost:8000"
export const addUser = async(data) => {
    try {
    await axios.post(`${url}/add`,data)
    } catch(err){
        console.log(`Error while addUser API ${err.message}`);
    }
}
export const getUser = async() => {
    try {
      let {data} =  await axios.get(`${url}/users`);
      return data
        } catch(err){
            console.log(`Error while addUser API ${err.message}`);
        }
}

export const setConversatation = async (data) => {
    try {
       await axios.post(`${url}/conversation/add`,data)
          } catch(err){
              console.log(`Error while calling setConversation api ${err.message}`);
          }
}
export const getConversesion = async(alldata) => {
    try {
     const {data} =   await axios.post(`${url}/conversation/get`,alldata)
     return data
          } catch(err){
              console.log(`Error while calling getConversation api ${err.message}`);
          }
}
export const newMessage = async(alldata) => {
    try {
     const {data} =  await axios.post(`${url}/message/add`,alldata)
     return data
          } catch(err){
              console.log(`Error while calling getConversation api ${err.message}`);
          }
}
export const getMessages = async(id) => {
    try {
     const {data} =  await axios.get(`${url}/message/get/${id}`)
     return data
          } catch(err){
              console.log(`Error while calling on getting Message api ${err.message}`);
          }
}

export const uploadFile = async(data) => {
try {
    return  await axios.post(`${url}/file/upload`,data)
        } catch(err){
            console.log(`Error while calling on getting File  ${err.message}`);
        }
}


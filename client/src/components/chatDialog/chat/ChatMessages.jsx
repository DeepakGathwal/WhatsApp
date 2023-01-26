import React,{useEffect, useState, useContext, useRef} from 'react'
import { AccountContext } from '../../../context/AccountProvide'
import { Box,styled } from '@mui/material'
import ChatFooter from './ChatFooter'
import { getMessages, newMessage } from '../../../service/app'
import Messages from './Messages'

const Wrapper = styled(Box)`
background-image:url('/images/chat.jpg');
background-size:cover;
  background-repeat:no-repeat;
  background-position:center center;
  `
const Intrnal = styled(Box)`
height:80vh;
overflow-y:scroll;
`
const ChatMessages = ({person, conversation}) => {
  const [file, setFile] = useState()
  const [image,setImage] = useState('')
  const [value,setValue] =useState('')
  const [allmessage,setAllMessage] =useState([])
  const {account, socket, onTime,setonTime} = useContext(AccountContext)
  const [inMessage,setInmassage] = useState(null)
  const scrollRef = useRef();



  useEffect(() => {
    socket.current.on("getMessage",data => {
      setInmassage({
        ...data,
        createdAt:Date.now()
      })
    })
  },[])
  useEffect(() => {
    const getMessageDetails = async () => {
     const data = await getMessages(conversation._id);
     setAllMessage(data);
    }
    conversation?._id && getMessageDetails();
  },[person._id, conversation._id,onTime])

useEffect(() => {
    scrollRef.current?.scrollIntoView({transition:'smooth'})
},[allmessage]);

useEffect(() => {
inMessage && conversation?.members?.includes(inMessage.senderId) && 
setAllMessage(prev => [...prev,inMessage ])
},[inMessage,conversation])
const receiverdId = conversation?.members?.find(member => member !== account.sub)

  const sendtaxt = async (e) => {
    const code = e.keyCode || e.which;
    if(!value) return;


    if(code === 13){
      let message = {};
      if(!file) {
         message = {
          senderId:account.sub,
          receiverdId:receiverdId,
          conversationId:conversation._id,
          type:"type",
          text:value,
        }
      } else {
         message = {
          senderId:account.sub,
          receiverdId:receiverdId,
          conversationId:conversation._id,
          type:"file",
          text:image,
        }
      }

      socket.current.emit("sendMessage",message)
      await newMessage(message);
      setValue(' ')
      setFile('')
      setImage('')
      setonTime(prev => !prev)
    }
    
  }

  return (
   <Wrapper>
    <Intrnal>
{
  allmessage && allmessage.map(message => (
   <Box style={{padding:"5px 10px"}} ref={scrollRef}>
     <Messages message={message}/>
   </Box>
  ))
}
    </Intrnal>
    <ChatFooter sendtaxt={sendtaxt} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage}/>
   </Wrapper>
  )
}

export default ChatMessages

import React,{ useContext } from 'react';
import {Box, InputBase, styled, Typography} from '@mui/material'
import { formdate, downloadData } from '../../../utils/util';
import { AccountContext } from '../../../context/AccountProvide';

import  GetAppIcon  from '@mui/icons-material/GetApp';
const RecivedMessage = styled(Box)`
    background:#dcf8c5;
    max-width:60%;
    margin-left:auto;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word;
`
const SentMessage = styled(Box)`
    background:#ffffff;
    max-width:60%;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word;
`
const Text = styled(Typography)`
font-size:14px;
padding:0 25px 0 5px;
`
const Time = styled(Typography)`
font-size:10px;
font-weight:light;
color:#919191;
margin-top:6px;
word-break:keep-all;
margin-top:auto;
`
const Messages = ({message}) => {
const {account} =useContext(AccountContext);

  return (
   <>
   {
    account.sub === message.senderId ? 
   <>
    <RecivedMessage>
    {
        message.type === 'file' ? <Imagemessage message={message}/>: <Textmessage message={message}/>

      }
  </RecivedMessage>
   </>
    :
   <>
    <SentMessage>
      {
        message.type === 'file' ? <Imagemessage message={message}/>: <Textmessage message={message}/>

      }
</SentMessage> 
   </>
 
   }
   </>
  )
}
const Textmessage = ({message}) => {
  return (
   <>
   <Text>{message.text}</Text>
    <Time>{formdate(message.createdAt)}</Time>
   </> 
  )
}

const Imagemessage = ({message}) => {
  return (
   <Box style={{position:"relative"}}>
   {
    message?.text?.includes('.pdf') ?  <img src={message.text} alt={message.text} style={{width:"300px", height:"250px", objectFit:"cover"}}/>: <img src={message.text} alt={message.text} style={{width:"300px", height:"250px", objectFit:"cover",padding:"0 25px 0 5px"}}/>
  }
    <Text style={{wordBreak:"break-word", fontSize:"14px",objectFit:"contain"}}>{message.text.split('-').pop()}</Text>
 
  <Time style={{position:"absolute", bottom:0,right:0}}>
    <GetAppIcon 
    onClick={(e) => downloadData(e, message.text)}
    style={{marginRigth:10,border:"1px solid gray", borderRadius:"50%", fontSize:"small"}}/>
    {formdate(message.createdAt)}</Time>
   </Box> 
  )
}

export default Messages

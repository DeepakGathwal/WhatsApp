import React,{useContext, useEffect, useState} from 'react'
import { AccountContext } from '../../context/AccountProvide'
import { Box, Dialog, List, ListItem, Typography, styled, InputBase } from '@mui/material'
import { setConversatation, getConversesion } from '../../service/app'
import { formdate } from '../../utils/util';

const Complement = styled(Box)`
  display:flex;
  height:45px;
  padding:13px 0;
  cursor: pointer;
`
const Time = styled(Typography)`
font-size:10px;
font-weight:light;
color:#919191;
margin-top:6px;
word-break:keep-all;
margin-top:auto;
`
const Contacts = ({user}) => {
  const {setPerson, account, onTime} = useContext(AccountContext);
  const [message, setlastChat] = useState({})
  useEffect(() => {
    const getConversationDetail = async() =>{
      const data = await getConversesion({senderId:account.sub, receiverdId:user.sub});
      setlastChat({text:data?.message,timestamp:data?.updatedAt})
    }
    getConversationDetail()
  },[onTime])
  const getUser = async() => {
    setPerson(user)
    await setConversatation({senderId: account.sub, receiverdId:user.sub})
  }
  return (
   <Complement onClick={() => getUser()}>
    <Box>
      <img src={user.picture} style={{width:"50px",height:"50px",borderRadius:"50%",padding:"0 14px",objectFit:'cover'}} alt="dp"/>
    </Box>
    <Box>
      <Box>
        <Typography>{user.name}</Typography>
        {
          message?.text && <Time>{formdate(message?.timestamp)}</Time>
        }
      <Typography>{message?.text?.includes("localhost") ? "media":message.text}</Typography>
      </Box>
      <Box>

      </Box>

    </Box>
   </Complement>
  )
}

export default Contacts;

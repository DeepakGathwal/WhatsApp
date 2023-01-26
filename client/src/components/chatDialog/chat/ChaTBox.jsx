import { Box } from '@mui/material'
import React,{useContext, useEffect, useState} from 'react'
import { AccountContext } from '../../../context/AccountProvide'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessages'
import {getConversesion} from '../../../service/app'

const ChaTBox = () => {
  const {person, account} = useContext(AccountContext)
  const [conversation, setConversation] = useState({})
  useEffect(() => {
    const getCoversationDetails = async() => {
     const data =  await getConversesion({senderId:account.sub,receiverdId: person.sub})
     setConversation(data);

    }
    getCoversationDetails();
  },[person.sub])
  return (
   <Box style={{height:'75%'}}>
<ChatHeader person={person}/>
<ChatMessage person={person} conversation={conversation}/>
   </Box>
  )
}

export default ChaTBox

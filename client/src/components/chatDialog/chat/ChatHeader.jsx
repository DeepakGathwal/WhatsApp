import { Box, styled, Typography } from '@mui/material'
import React,{useContext} from 'react'
import { AccountContext }  from '../../../context/AccountProvide'
import {MoreVert, Search} from '@mui/icons-material'
import { formdate } from '../../../utils/util'

const Header = styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`
const Right = styled(Box)`
margin-left:auto;
& > svg {
    padding:8px;
    font-size:24px;
    color:#000;
}

`
const Name = styled(Typography)`
margin-left:12px !important;
`
const Status = styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgba(0,0,0,0.6)
`


const ChatHeader = ({person}) => {
    const {activeUser} = useContext(AccountContext)

  return (
   <Header>
    <img src={person.picture} alt="dp" style={{height:"40px",width:"40px", objectFit:"cover",borderRadius:"50%"}}/>
    <Box>
        <Name>
           {person.name}
        </Name>
        <Status>
            {activeUser?.find(user =>user.sub === person.sub)? 'Online':'Offline'}
        </Status>
    </Box>
    <Right>
<Search/>
<MoreVert/>
    </Right>
   </Header>
  )
}

export default ChatHeader

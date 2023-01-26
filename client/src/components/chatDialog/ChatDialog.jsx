import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import Menu from '../Menu/Menu'
import Chat from './chat/Chat'
import ChaTBox from './chat/ChaTBox'
import React,{useContext} from 'react'
import { AccountContext } from '../../context/AccountProvide'


const dialog = {
  height:'95%',
  width:'100%',
  margin:"20px",
  maxWidth:'100%',
  borderRadius:0,
  maxHeight:'100%',
  boxShadow:'none',
  overflow:"hidden",
}
const ORCODE =styled(Box)`
display:flex;
`
const LeftSide = styled(Box)`
min-width:450px
`
const RightSide = styled(Box)`
min-width:300px;
width:73%;
height:100%
border-left:1px solid rgba(0,0,0,0.14);
`
const ChatDialog = () => {
  const {person} = useContext(AccountContext)

  return (
   <>
    <Dialog open={true} PaperProps={{sx: dialog}} hideBackdrop={true} maxWidth={'md'}>
     <ORCODE>
      <LeftSide>
    <Menu/>
      </LeftSide>
      <RightSide>
    {Object.keys(person).length ?  <ChaTBox/>: <Chat/>}
      </RightSide>
     </ORCODE>
      </Dialog>
   </>
  )
}

export default ChatDialog
import React,{useContext} from 'react'
import {AppBar, Toolbar, styled, Box} from '@mui/material'
import LoginDialog from './LoginDialog'
import { AccountContext } from '../context/AccountProvide'
import ChatDialog from './chatDialog/ChatDialog'


const LoginHeader = styled(AppBar)`
height:200px;
background-color:#00bfa5;
box-shadow:none;
`
const ChatHeader = styled(AppBar)`
height:125px;
background-color:#00A884 ;
box-shadow:none;
`
const Diva = styled(Box)`
height:100vh;
background-color:#dcdcdc;
box-shadow:none;
`


const Messangers = () => {
  const {account} = useContext(AccountContext)

  return (
    <>
    <Diva>
      {
        account ? <>
         <ChatHeader>
        <Toolbar>
        </Toolbar>
    </ChatHeader>
    <ChatDialog/>
        </> : <>
    <LoginHeader>
        <Toolbar>

        </Toolbar>
    </LoginHeader>
    <LoginDialog/>
        </> 
      }
    </Diva>
    </>
  )
}

export default Messangers
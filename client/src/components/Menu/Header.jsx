import React, {useContext, useState} from 'react'
import { Box,  styled } from '@mui/material'
import { AccountContext } from '../../context/AccountProvide'
import {  Chat} from '@mui/icons-material'
import Headermenu from './Headermenu'
import InfoDrawer from '../drawer/InfoDrawer'
const Header = () => {
  const {account} = useContext(AccountContext)

  const [openDrawer,setOpenDrawer] = useState(false)
const Component = styled(Box)`
height:44px;
background-color:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`
const Wrapper = styled(Box)`
margin-left:auto;
& > * {
  margin-left:2px;
  padding:8px;
  color:#000;
};
& :first-child{
  font-size:22px;
  margin-right:8px;
  margin-top:3px;
}`
const toggleDwawer = () => {
  setOpenDrawer(true)
}

  return (
    <>
    <Component>
      <img src={account.picture} style={{height:"40px", width:"40px", borderRadius:"50%"}} alt="pic not found" onClick={() => toggleDwawer()}/>
    <Wrapper>
    <Chat/>
    <Headermenu setOpenDrawer={setOpenDrawer}/>
    </Wrapper>
    </Component>
    <InfoDrawer newopen={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header
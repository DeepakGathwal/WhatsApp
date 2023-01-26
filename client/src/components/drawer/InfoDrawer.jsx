import React from 'react'
import {Drawer, styled, Typography} from "@mui/material"
import { Box } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import Profile from './Profile'

const DrawerStyle = {
    left:20,
    top:17,
    height:"95%",
    width:"30%",
    boxShadow:'none',
}
const Header =  styled(Box)`
    background:#008060;
    height:107px;
    color:#ffffff;
    display:flex;
    & > svg, & > p {
        margin-top:auto;
        padding:15px;
        font-weight:600;
    }
`;

const Component =  styled(Box)`
background:#ededed;
height:85%;
`

const InfoDrawer = ({newopen, setOpen}) => {
    const handelClose = () => {
        setOpen(false)
    }
 const Font = styled(Typography)`
 font-size = 18px
 `   

  return (
  <>
  <Drawer
  open={newopen}
  onClose={handelClose}
  PaperProps={{sx:DrawerStyle}}
  style={{zIndex:1500}}
  >
    <Header>
        <ArrowBack onClick={() => setOpen(false)}/>
        <Font>Profile</Font>
        </Header>
        <Component>
    <Profile/>
    </Component>
  </Drawer>
  </>
  )
}

export default InfoDrawer

import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React,{useContext} from 'react'
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../context/AccountProvide'
import { addUser } from '../service/app'

const dialog = {
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:"hidden",
    backgroundColor:"none"
}
const ORCODE =styled(Box)`
display:flex;
`
const Conatiner = styled(Box)`
padding:56px 0 56px 56px`
const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300";
font-family:inherit;
margin-bottom:25px;
`
const Lists = styled(List)`
&  > li {
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#4a4a4a;
}
`
const LoginDialog = () => {
    const {setAccount} = useContext(AccountContext)

    const lPass = async(res) => {
      const PersonData =   jwt_decode(res.credential);
     setAccount(PersonData)
     await addUser(PersonData)
    }
    const lFail = (res) => {
        console.log(res);
    
    }
    return (
   <>
   <Dialog open={true} PaperProps={{sx: dialog}} hideBackdrop={true}>
   <ORCODE>
   <Conatiner>
           <Title>
            To Use WhatsApp on Your Computer
            </Title> 
            <Lists>
                <ListItem>
                   1. Open WhatsApp on Your Phone
                </ListItem>
                <ListItem>
                   2. Tap Menu : Settings : or Settings @ and select Linked Devices
                </ListItem>
                <ListItem>
                    3. Point your phone to this screen to capture the code
                </ListItem>
            </Lists>
        </Conatiner>
        <Box style={{position:'relative'}}>
            <img src='/images/qrcode.svg' style={{width:"250px", height:"250px", margin:"50px 50px 0 50px"}} alt="qr-code"/>
            <Box style={{position:'absolute', top:"50%", transform:"translateX(25%)"}}>
                <GoogleLogin
                onSuccess={lPass}
                onError={lFail}
                />
            </Box>
    </Box>
   </ORCODE>
   </Dialog>

   </>
  )
}

export default LoginDialog
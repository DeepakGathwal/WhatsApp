
import React, {useContext, useState} from 'react'
import { Box,  styled, Typography } from '@mui/material'
import { AccountContext } from '../../context/AccountProvide'
const ImageConatiner = styled(Box)`
    display:flex;
    justify-content:center;
`;
const BoxWrapper = styled(Box)`
background:#fffff;
padding: 12px 30px 2px;
box-shadow: 0 1px 3px rgba(0,0,0,0.08);
& :first-child {
    font-size:13px;
    color:#009688;
    font-weight:200;
}
&:last-child {
    margin:14px 0;
    color:#4a4a4a;
}
`
const Descr = styled(Box)`
padding:15px 20px 20px 30px;
& > p {
    font-size:13px;
    color:#8696a0
}
`

const Profile = () => {
  const {account} = useContext(AccountContext)

  return (
    <>
    <ImageConatiner>
      <img src={account.picture} style={{height:"200", width:"200", borderRadius:"50%", padding:"25px 0"}} alt="pic not found"/>
    </ImageConatiner>
    <BoxWrapper>
    <Typography>Your Name</Typography>
    <Typography contenteditable="true">{account.name}</Typography>
    </BoxWrapper>
    <Descr>
        <Typography>
            This is not your username or pin. This name will be visible to your WhatsApp contacts.
        </Typography>
    </Descr>
    <BoxWrapper>
        <Typography>
            Type
        </Typography>
        <input
        type="text"
        />
    </BoxWrapper>
    </>
  )
}

export default Profile

import React from 'react'
import { Box, Dialog, List, ListItem, Typography, styled, InputBase } from '@mui/material'
import {Search as SearchIcon} from '@mui/icons-material'
const Compement = styled(Box)`
background:#fff;
height:45px;
border-bottom:1px solid #f2f2f2;
display:flex;
align-items:center;
`
const Compement2 = styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:10px;
`
const Compement3 = styled(Box)`
position:absolute;
height:100%;
padding:6px 10px;
color:#919191;
`
const InputField = styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:15px;
font-size:14px;
`
const Search = ({setText}) => {
  return (
  <>
   <Compement>
    <Compement2>
        <Compement3>
            <SearchIcon
            fontSize='small'
            />
        </Compement3>
        <InputField
        placeholder='Search Or Start New Chat  '
        onChange={(e) => setText(e.target.value)}
        />
    </Compement2>
   </Compement>
  </>
  )
}

export default Search
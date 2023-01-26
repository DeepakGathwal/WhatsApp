import React,{useState} from 'react'
import Header from './Header'
import { Box,  styled } from '@mui/material'
import Search from './Search'
import Converssation from '../ChatContacts/Converssation'
const Menu = () => {
  const [text,setText] = useState('')
  return (
    <>
    <Box>
      <Header/>
      <Search setText={setText}/>
      <Converssation text={text}/>
    </Box>
    </>
  )
}

export default Menu
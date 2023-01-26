import { Box, styled,Divider } from '@mui/material'
import React,{useEffect, useState, useContext} from 'react'
import { getUser } from '../../service/app'
import Contacts from './Contacts'

import { AccountContext } from '../../context/AccountProvide'

const Contents = styled(Box)`
  height: 81vh;
  overflow:overlay;
`

const Converssation = ({text}) => {
  const [users, setUser] = useState([])
  const {account, socket, setActiveuser} = useContext(AccountContext)

  useEffect(() => {
  const fetchdata = async() => {  
  const data =  await  getUser()
  const filterdata = data.filter(user =>user.name.toLowerCase().includes(text.toLowerCase()))

setUser(filterdata)
  }
  fetchdata();
  },[text]);
  
  useEffect(() => {
    socket.current.emit("addUsers",account)
    socket.current.on("getUsers", users =>{
      setActiveuser(users)
    } )
  },[account])

  return (
   <Contents>
     {users.map(user => (
      user.sub!== account.sub &&
      <>
      <Contacts user={user}/>
      <Divider style={{margin:"0 0 0 70px", backgroundColor:"#e9edef",opacity:".6"}}/>
      </>
    ))}
   </Contents>
  )
}

export default Converssation;

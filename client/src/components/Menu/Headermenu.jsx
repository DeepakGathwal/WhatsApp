import React, {useState} from 'react'
import { Box, Dialog, List, ListItem, Typography, styled, Menu, MenuItem } from '@mui/material'
import {  MoreVert} from '@mui/icons-material'

const Headermenu = ({setOpenDrawer}) => {
    const [open,setOpen] = useState(null);
    const handelClose = () => {
        setOpen(null)
        setOpenDrawer(false)
    }
    const handelOpen = (e) => {
        setOpen(e.currentTarget)
    }
    const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 15px 15px 15px;
    color:#4a4a4a;
    `;
  return (
    <>
    <MoreVert onClick={handelOpen}/>
    <Menu
    id='basic-menu'
    keepMounted
    anchorEl={open}
    open={open}
    onClose={handelClose}
    getContentAnchoreE1={null}
   anchorOrigin={{
    vertical:"bottom",
    horizontal:"center"
   }}
   transformOrigin={{
    vertical:"top",
    horizontal:"right"
   }}
    >
        <MenuOption onClick={handelClose}>New Group</MenuOption>
        <MenuOption onClick={() =>{handelClose();setOpenDrawer(true);}}>Archived</MenuOption>
        <MenuOption onClick={handelClose}>Starred Messages</MenuOption>
        <MenuOption onClick={handelClose}>Settings</MenuOption>
        <MenuOption onClick={handelClose}>LogOut</MenuOption>
    </Menu>
    </>
  )
}

export default Headermenu
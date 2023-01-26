import React,{useState} from 'react'
import {Box, InputBase, styled} from '@mui/material'
import {EmojiEmotionsOutlined, AttachFile, Mic, UploadFile} from '@mui/icons-material'
import { useEffect } from 'react';
import { uploadFile } from '../../../service/app';
const Header = styled(Box)`
height:55px;
background:#ededed;
display:flex;
width:100%;
align-items:center;
padding:0 15px;
& > * {
  margin:5px;
  color:#919191;
}
`;
const Search = styled(Box)`
background-color:#FFFFFF;
border-radius:18px;
width:calc(94% - 100px);
`
const InputField = styled(InputBase)`
  width:100%;
  padding:20px;
  height:20px;
  padding-left:25px;
  font-size:14px;
`;
const ChatFooter = ({sendtaxt, setValue, value, file, setFile, setImage}) => {

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name",file.name)
        data.append("file",file);
      let response =  await uploadFile(data)
      console.log(response.data);
      setImage(response.data)
      }
    }
    getImage();
  },[file])
  
  const  onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }
  return (
   <Header>
    <EmojiEmotionsOutlined/>
   <label htmlFor='fileInput'>
    <AttachFile style={{transform:"rotate(40deg)"}}/>
   </label>
    <input type="file"
    id="fileInput"
    style={{display:"none"}}
    onChange={(e) => onFileChange(e)}
    />
    <Search>
      <InputField
    placeholder='Type a message'
    onChange={(e) =>setValue(e.target.value)}
    value={value}
    onKeyPress={(e) =>sendtaxt(e)}
    />
    </Search>
    <Mic/>
   </Header>
  )
}

export default ChatFooter

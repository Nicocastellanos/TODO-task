import React from 'react'
import  CircularProgress  from "@mui/material/CircularProgress"
import './Message.css'

export default function TodoLoading() {
  return (
      <CircularProgress 
      className='loading' 
      style={{ color: 'rgb(92, 112, 201)', width: '100px'}}/>
  )
}

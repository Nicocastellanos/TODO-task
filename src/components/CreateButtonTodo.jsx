import React, { useContext } from 'react'
import '../css/ButtonTodo.css'
import { TodoContext } from './hooks/TodoContext'

export default function CreateButtonTodo() {

  const {setOpenModal} = useContext(TodoContext)
  
//en el setOpenModal, cree una arrow function donde recibo un parametro y le devulevo la negacion de ese estado
  return (
    <div className='buttonTodo'>
        <button className='button' onClick={()=>{
          setOpenModal(state => !state)
          }}>+</button>
    </div>
  )
}

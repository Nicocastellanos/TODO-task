import React, { useContext, useEffect, useState } from 'react'
import '../css/TodoForm.css'
import { TodoContext } from './hooks/TodoContext'

export default function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');
  const [message, setMessage] = useState('');

useEffect(() => {
  setMessage(validForm(newTodoValue))
}, [newTodoValue])


  const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () =>{
    setOpenModal(false)
  }

  const onChange = (event) =>{
    setNewTodoValue(event.target.value)
  }

  const validForm = (newTodoValue) => {
    if(!newTodoValue){
      return 'Debes escribir una tarea'
    }
  }

  const disabled = message;

  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo<span className='span-form'>TODO</span></label>
        <textarea 
          placeholder='Cortar cebolla'
          value={newTodoValue}
          onChange={onChange}
        />
        <span role='alert' className='alert'>{message}</span>
        <div className= 'button-container'>
            <button 
              className='cancel-todo'
              type='submit'
              onClick={onCancel}
            >Cancelar</button>
            <button 
              className='add-todo'
              type='submit'
              disabled={disabled}
            >Agregar</button>
        </div>
    </form>
  )
}

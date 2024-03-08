import React, { useContext } from 'react'
import '../css/Style.css'
import { TodoContext } from './hooks/TodoContext';

function TodoSearch() {
  
//con useContext podemos usar las funciones o la logica que declaramos en TodoContext para asi no pasarla como props 
  const {setSearch, search} = useContext(TodoContext);

  return (
    <div className='search'>
        <input 
        placeholder='Cortar cebolla' 
        className='input'
        value={search}
        onChange={(event)=>{
            setSearch(event.target.value);
        }}
        />
    </div>
  )
}

export default TodoSearch
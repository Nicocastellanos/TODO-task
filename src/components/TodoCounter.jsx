import React, { useContext } from 'react'
import '../css/Style.css'
import { TodoContext } from './hooks/TodoContext'

function TodoCounter() {

  const {totalTodos, completedTodos } = useContext(TodoContext)

  return (
    totalTodos === completedTodos ?

    <h1 className='congratulations'>¡Felicitaciones! <span className='feli'>completaste todos los Todos</span></h1>

    :

    <div>
        <h1 className='todo-title'>Your Todos</h1>
        <p className='counterTodo'>Has completado <span className='counterNumber'>{completedTodos}</span> de <span className='counterNumber'>{totalTodos}</span> TODOS</p>
    </div>
  )
}

export default TodoCounter
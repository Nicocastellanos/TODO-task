import React, { useContext } from 'react'
import '../css/Style.css'
import TodoCounter from '../components/TodoCounter'
import TodoItem from '../components/TodoItem'
import TodoList from '../components/TodoList'
import TodoSearch from '../components/TodoSearch'
import CreateButtonTodo from '../components/CreateButtonTodo'
import EmptyTodos from '../components/messages/EmptyTodos'
import TodosError from '../components/messages/TodosError'
import TodoLoading from '../components/messages/TodoLoading'
import { TodoContext } from './hooks/TodoContext'
import Modal from './Modal'
import TodoForm from './TodoForm'

export default function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  
  return (
    <div className='contenedor'>
      <TodoCounter />
          <TodoSearch />
            <TodoList>
                {loading && <TodoLoading/>}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) 
                && <EmptyTodos/>}  

                    {searchedTodos.map(todo =>(
                    <TodoItem  
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
            </TodoList>
      <CreateButtonTodo setOpenModal={setOpenModal}/>

     {openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
     )}
    </div>
  )
}

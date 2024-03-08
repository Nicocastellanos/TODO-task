import React from 'react'
import { TodoProvider } from '../components/hooks/TodoContext'
import  TodosUI from '../components/TodosUI'


export default function Todos() {

  //se crea un nuevo componente donde va a tener el diseño de los todos y ese componente se encierra en el provider
  return (
    <TodoProvider>
      <TodosUI/>
    </TodoProvider>
  )
}

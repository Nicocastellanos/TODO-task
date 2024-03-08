import React, { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

//se usa el context para evitar el prop drilling, osea muchos props y mucha info muy compleja.
const TodoContext = createContext();

function TodoProvider({ children }){

  const [search, setSearch] = useState('');
  //se crea un estado para que pueda abrir y cerrar el formulario
  const [openModal, setOpenModal] = useState(false);

  //llamar al custom hook, y se le pasa como parametro el item name y el defaul value
  const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,} = useLocalStorage('TODOS_V1', []);


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //variable para buscar un todo
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    } 
  );

  //variable para borrar el todo
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  //variable para completar un todo
  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed ;
    saveTodos(newTodos);
  }

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  }
  

  /*se usa el TodoContext.Provider para volver publica 
  por asi decirlo toda nuestra logica, por eso se le pasa en 
  un value esas varables y funciones
  Ademas se usa children para indicar que todos los 
  componentes hijos que se encierren en el provider, 
  podran usar la logica que estamos exportando */ 

  return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchedTodos,
            search,
            setSearch,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}
//exportamos el provider y el context para asi usarlos en otros componentes.
export { TodoProvider, TodoContext };
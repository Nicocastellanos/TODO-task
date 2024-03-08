import { useEffect, useState } from "react";

//Custom hook
export default function useLocalStorage(itemName, initialValue){
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
/*se usa el loading y el error para que cuando recarguemos
 la pagina aparezca cargando, despues de 2 segundos de beria mostrarme mis TODOS si 
 es que tengo, y si no me muestra un mensaje de error*/
useEffect(() => {
  setTimeout(()=>{
    try{
      const localStorageItem = localStorage.getItem(itemName);
    
      let parsedItem;
      
        if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue;
        }else{
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
        }
        setLoading(false);
        
      }catch(error){
        setLoading(false);
        setError(true);
      }
  }, 2000);
});





const saveItem = (newItem) => {
  localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
};

//el orden si importa aca ya que es como si fuera el use state
//aca solo se retorna lo que se va a usar en otras funciones
  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export {useLocalStorage}
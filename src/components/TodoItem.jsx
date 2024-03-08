import React from 'react'
import '../css/Item.css'
import { CompleteIcon } from './iconos/CompleteIcon';
import { DeleteIcon } from './iconos/DeleteIcon';

function TodoItem(props) {
  return (
    <div className='box-item'>
      <div className='item'>
          <li className='li'>
            <div className='complete'>
                <CompleteIcon 
                completed ={props.completed}
                onComplete={props.onComplete}
                />
            </div>    
              <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
              <div className='delete'>
                <DeleteIcon onDelete={props.onDelete}/>
              </div>
          </li>
      </div>
    </div>
  )
}

export default TodoItem
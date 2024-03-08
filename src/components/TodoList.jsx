import React from 'react'


export default function TodoList(props) {
  return (
    <div>
        <ul>
           {props.children}
        </ul>
    </div>
  )
}

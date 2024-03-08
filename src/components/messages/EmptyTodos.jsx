import React from 'react'

export default function EmptyTodos() {
  return (
    <div className='empty'>
      <h1 className='empty-title'>No tienes ningun <span className='todo'>Todo</span> creado</h1>
      <p className='empty-description'>oprime el boton <span className='todo'>(+)</span> para crear tu primer todo</p>
    </div>
  )
}

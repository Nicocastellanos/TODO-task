import React from 'react'
import { createPortal }  from 'react-dom'
import '../css/TodoForm.css'

export default function Modal({children}) {
  return createPortal(
    <div className='modal-background'>
        {children}
    </div>,
    document.getElementById('modal')
  )
}

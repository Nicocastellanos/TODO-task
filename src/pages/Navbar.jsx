import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
        <p><Link to='/' className='todos'>TODOS</Link></p>
        <div className='about-home'>
            <p><Link to='/' className='link'>Home</Link></p>
            <p><Link to='/contact' className='link'>About Me</Link></p>
        </div>
    </nav>
  )
}

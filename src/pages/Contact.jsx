import React from 'react'
import '../css/AboutMe.css'
import { Link } from 'react-router-dom'
import imagen from '../assets/perfil.png'

export default function Contact() {
  return (
    <div className='about-box'>
        <div className='about'>
            <img src={imagen} alt="perfil" className='img'/>
            <h1 className='name'>Nicolas Castellanos</h1>
            <p className='profession'>Full Stack Developer</p>
            <p className='p'><Link to='https://github.com/Nicocastellanos' className='link-pages
            '>GitHub</Link></p>
            <p className='p'><Link to='' className='link-pages'>Linkedln</Link></p>
            <p className='p'><Link to='' className='link-pages'>Instagram</Link></p>
            <p className='p'><Link to='' className='link-pages'>TikTok</Link></p>
        </div>
    </div>
  )
}

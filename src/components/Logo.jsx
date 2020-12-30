import React from 'react'
import { Link } from 'react-router-dom'
import { logoData } from '../Database'

export default function Logo({type}) {
  return (
    type === 'header' ? 
    <Link className='navbar-brand' to='/'>
      <img src={logoData.header.img} className={logoData.header.cls} alt='logo'/>
    </Link> : 
    <Link className='navbar-brand' to='/'>
      <img src={logoData.footer.img} className={logoData.footer.cls} alt='logo'/>
    </Link>
  )
}

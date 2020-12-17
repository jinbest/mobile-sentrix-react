import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({type}) {
  return (
    type === 'header' ? 
    <Link className='navbar-brand' to='/'>
      <img src={require("../img/logo/logo-header.png")} className='img-header' alt='logo'/>
    </Link> : 
    <Link className='navbar-brand' to='/'>
      <img src={require("../img/logo/logo-footer.png")} className='img-footer' alt='logo'/>
    </Link>
  )
}

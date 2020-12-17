import React from 'react'
import { navItemsData } from '../Database'
import Logo from './Logo'

const NavItemLink = ({ item: { href, text, isActive } }) => {
  return (
    text !== "My Account" ? <li className='nav-item'>
      <a className={isActive ? 'nav-link active' : 'nav-link'} href={href}>
        {text}
      </a>
    </li> : <li className='nav-item'>
      <a 
        className={isActive ? 'nav-link active border-round-navbar' : 'nav-link border-round-navbar'} 
        href={href}
      >
        {text}
      </a>
    </li>
  )
}

export default function Header() {
  const navItemsLink = navItemsData

  return (
    <header className='header fixed-top'>
      <div className='container-header-footer'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Logo type='header'/>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav ml-auto'>
              {navItemsLink.map((item, index) => {
                return <NavItemLink item={item} key={index} />
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

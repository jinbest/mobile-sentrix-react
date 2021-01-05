import React from 'react'
import Logo from './Logo'
import { footerData } from '../Database'

export default function Footer() {
  const items = footerData
  
  return (
    <footer className='footer'>
      <div className='container-header-footer'>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <div className='footer-left-container'>
            <div className='row'>
              <div className='col-lg-6'>
                <Logo type='footer' />
              </div>
              <div className='col-lg-6'>
                <p className='text-1'>+1(202) 540-9946</p>
                <p className='text-1'>sales@mobilesentrix.com</p>
                <p className='text-1'>4315-D Walney Road, Chantily, Virginia 20151</p>
                <p className='text-2'>Monday-Friday: 10 a.m. - 9 p.m. (est)</p>
                <p className='text-2'>Saturday: 2 p.m. - 6 p.m. (est)</p>
              </div>
            </div>
          </div>
          <div className='footer-right-container'>
            <div className='row'>
              <div className='col-lg-6'>
                {items.left.map(({ title, href }, index) => (
                  <a className='text-2' key={index} href={href}>{title}</a>
                ))}
              </div>
              <div className='col-lg-6 order-first order-lg-last'>
                {items.right.map(({ title, href }, index) => (
                  <a className='text-2' key={index} href={href}>{title}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

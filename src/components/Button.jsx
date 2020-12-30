import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  title,
  icon='',
  type = 'mybtn1',
  href = '',
  bgcolor = '#4F9EE7',
  txcolor = 'white',
  width = ''
}) {
  return (
    <Link to={href} className={'btn ' + type} style={{backgroundColor: bgcolor, width: width}}>
      <span style={{color: txcolor}}>{title}</span>
      {icon && <i className={icon}></i>}
    </Link>
  )
}

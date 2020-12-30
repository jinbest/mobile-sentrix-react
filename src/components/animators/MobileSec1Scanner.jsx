import React from 'react'
import { homeSec1Images } from '../../Database'

export default function MobileSec1Scanner() {
  return (
    <div className='mobile-sec1-scanner-container'>
      <img src={homeSec1Images.mobileSec1} alt='mobile-sec1' className='mobile-sec1' />
    </div>
  )
}

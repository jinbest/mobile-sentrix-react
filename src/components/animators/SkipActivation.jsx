import React from 'react'
import { skipActiveAnimation } from '../../Database'

export default function SkipActivation() {
  return (
    <div className='phone-skip-activation-container'>
      <img className='skipPhone' src={skipActiveAnimation.skipPhone} alt='skipPhone' />
    </div>
  )
}
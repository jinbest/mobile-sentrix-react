import React from 'react'
import { partDetectAnimation } from '../../Database'

export default function PartDetection() {
  return (
    <div className='phone-part-detection-container'>
      <img className='blankPhone' src={partDetectAnimation.blankPhone} alt='blankPhone' />
    </div>
  )
}
import React from 'react'
import { partDetectAnimation } from '../../Database'

export default function PartDetection() {
  return (
    <div className='phone-part-detection-container'>      
      <div className='blank-phone-cover'>
        <img className='phoneDetection' src={partDetectAnimation.phoneDetection} alt='phoneDetection' />
        <div className='cover'>
          <img className='blankPhone' src={partDetectAnimation.blankPhone} alt='blankPhone' />
        </div>
      </div>
      <img className='blueLine' src={partDetectAnimation.blueLine} alt='blueLine' />
    </div>
  )
}
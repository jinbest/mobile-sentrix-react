import React from 'react'
import { homeSec1Images } from '../../Database'

export default function MobileSec1Scanner() {
  return (
    <div className='mobile-sec1-scanner-container'>
      <div className='mob-sec1-animation-area'>
        <img src={homeSec1Images.mobileSec1} alt='mobile-sec1' className='mobile-sec1' />
        <div>
          <img src={homeSec1Images.layer1} alt='mobile-layer1' className='mobile-layer1' />
          <img src={homeSec1Images.layer2} alt='mobile-layer2' className='mobile-layer2' />
          <img src={homeSec1Images.layer3} alt='mobile-layer3' className='mobile-layer3' />
          <img src={homeSec1Images.layer4} alt='mobile-layer4' className='mobile-layer4' />
        </div>
        <img src={homeSec1Images.lineScanner} alt='mobile-lineScanner' className='mobile-lineScanner' />
      </div>
    </div>
  )
}

import React from 'react'
import { skipActiveAnimation } from '../../Database'

export default function SkipActivation() {
  return (
    <div className='phone-skip-activation-container'>
      <img className='skipPhone' src={skipActiveAnimation.skipPhone} alt='skipPhone' />
      <p className='phoneText'>Hello</p>
      <div className='cover-lineCurve'>
        <div className='cover'>
          <img className='lineCurve' src={skipActiveAnimation.lineCurve} alt='lineCurve' />
        </div>
      </div>
      <div className='unlocked-div'>
        {skipActiveAnimation.unlockedSnaps1.map((item, index) => {
          return (
            <img className='unlocked-item' src={item} key={index} alt='unlocked item' />
          )
        })}
        <img className='line-dots' src={skipActiveAnimation.lineDots} alt='lineDots' />
        {skipActiveAnimation.unlockedSnaps2.map((item, index) => {
          return (
            <img className='unlocked-item' src={item} key={index} alt='unlocked item' />
          )
        })}
      </div>
    </div>
  )
}
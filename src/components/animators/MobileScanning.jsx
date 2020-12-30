import React from 'react'
import { mobileScanningAnimationData } from '../../Database'

export default function MobileScanning({cls}) {
  return (
    <div className={cls}>
      {
        mobileScanningAnimationData.map((item, index) => {
          return (
            <img src={item.img} alt={item.alt} className={item.cls} key={index} />
          )
        })
      }
    </div>
  )
}

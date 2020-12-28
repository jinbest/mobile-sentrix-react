import React from 'react'
import { phonePluginAnimations } from '../../Database'

export default function PhonePlugin() {
  return (
    <div className='phone-plugin-container'>
      <img className='phone' src={phonePluginAnimations.phone} alt='phone' />
      <img className='plugin' src={phonePluginAnimations.plugin} alt='plugin' />
      <img className='phone-plugin' src={phonePluginAnimations.phonePlugin} alt='phone-plugin' />
      <img className='phone-group1' src={phonePluginAnimations.group1} alt='phone-group1' />
      <img className='phone-group2' src={phonePluginAnimations.group2} alt='phone-group2' />
    </div>
  )
}
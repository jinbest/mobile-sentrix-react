import React from 'react'
import { homeSec3Images } from '../../Database'
import SectionTitle from '../../components/SectionTitle'

export default function Section3() {

  let dots = [];
  for (let i = 0; i < 17; i++) {
    dots.push('dot' + i)
  }
  const checks = [
    { id: 'check0', left: '19%', top: '16%' },
    { id: 'check1', left: '19%', top: '24.5%' },
    { id: 'check2', left: '19%', top: '33%' },
    { id: 'check3', left: '19%', top: '41.5%' },
    { id: 'check4', left: '19%', top: '50%' },
    { id: 'check5', left: '47%', top: '28.5%' },
    { id: 'check6', left: '47%', top: '37%' },
    { id: 'check7', left: '47%', top: '45.5%' },
    { id: 'check8', left: '47%', top: '54%' },
    { id: 'check9', left: '47%', top: '62.5%' },
  ]

  return (
    <section className='home-section-3'>
      <div className='container1'>
        <SectionTitle subtitle='How It Works?' />
        <div className='row'>
          <div className='col-lg-4 col-sm-6 d-flex sec3-col'>
            <div className='home-sec3-item-container sec3-login'>
              <img src={homeSec3Images.Intersect1} alt='intersect-1' className='intersect-1' />
              <p className='sec3-card-num'>01</p>
              <p className='sec3-card-topic'>LOG IN</p>
              <img src={homeSec3Images.loginSec3} alt='loginSec3' className='loginSec3' />
              <div className='password-dots'>
                {dots.map((item, index) => {
                  return (
                    <img src={homeSec3Images.dot} alt={item} className='dot' id={item} key={index} />
                  )
                })}
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 d-flex sec3-col'>
            <div className='home-sec3-item-container sec3-plugin'>
              <img src={homeSec3Images.Intersect2} alt='intersect-2' className='intersect-2' />
              <p className='sec3-card-num'>02</p>
              <p className='sec3-card-topic'>PLUG IN</p>
              <img src={homeSec3Images.blankPhoneSec3} alt='blankPhoneSec3' className='blankPhoneSec3' />
              <img src={homeSec3Images.pluginSec3} alt='pluginSec3' className='pluginSec3' />
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 d-flex sec3-col'>
            <div className='home-sec3-item-container sec3-diagnosis'>
              <img src={homeSec3Images.Intersect3} alt='intersect-3' className='intersect-3' />
              <p className='sec3-card-num'>03</p>
              <p className='sec3-card-topic'>VIEW DIAGNOSIS</p>
              <img src={homeSec3Images.unchecked} alt='unchecked' className='unchecked' />
              <div>
                {checks.map((item, index) => {
                  return (
                    <img src={homeSec3Images.check} alt={item.id} className='check' style={{left: item.left, top: item.top}} id={item.id} key={index} />    
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

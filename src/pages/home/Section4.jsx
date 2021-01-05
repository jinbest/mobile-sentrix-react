import React from 'react'
import Section from '../../components/Section'
import AssestImg from '../../img/assest-section4.png'
import AssestImg2 from '../../img/assest-section4-2.png'

export default function Section4() {
  return (
    <Section
      title='Home Section-4'
      subtitle='Our Network of Trusted Partners'
      className='home-section-4'
    >
      <div className='row'>
        <img className='home-sec4-img-1' src={AssestImg} alt='assest1'/>
        <img className='home-sec4-img-2' src={AssestImg2} alt='assest2'/>
      </div>
    </Section>
  )
}

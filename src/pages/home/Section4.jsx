import React from 'react'
import Section from '../../components/Section'
import AssestImg from '../../img/assest-section4.png'

export default function Section4() {
  return (
    <Section
      title='Home Section-4'
      subtitle='Our Network of Trusted Partners'
      className='home-section-4'
    >
      <div className='row'>
        <img src={AssestImg} alt='assest'/>
      </div>
    </Section>
  )
}

import React from 'react'
import { featuresDataSection2 } from '../../Database'
import SectionTitle from '../../components/SectionTitle'

const Item = ({ img, subtitle }) => {
  return (
    <div className='features-item col-lg-12'>
      <div>
        <img src={img} alt='home-feature-section-2'/>
      </div>
      <p style={{fontWeight: 700}}>{subtitle}</p>
    </div>
  )
}

export default function Section2() {
  const featureItems = featuresDataSection2

  return (
    <section className='home-section-2'>
      <div className='container1'>
        <SectionTitle subtitle='Why Choose Us?' />

        <div className='row'>
          {featureItems.map(({ img, subtitle }, index) => (
            <div className='col-lg-3 col-md-6 d-flex' key={index}>
              <Item img={img} subtitle={subtitle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Item }

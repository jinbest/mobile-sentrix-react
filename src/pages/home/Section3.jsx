import React from 'react'
import { featuresDataSection3 } from '../../Database'
import SectionTitle from '../../components/SectionTitle'

const Item = ({ img }) => {
  return (
    <div className='features-item col-lg-12'>
      <div>
        <img src={img} alt='home-feature-section-3'/>
      </div>
    </div>
  )
}

export default function Section3() {
  const featureItems = featuresDataSection3

  return (
    <section className='home-section-3'>
      <div className='container1'>
        <SectionTitle subtitle='How It Works?' />

        <div className='row'>
          {featureItems.map(({ img }, index) => (
            <div className='col-lg-4 col-md-6 d-flex' style={{padding: '0 30px'}} key={index}>
              <Item img={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Item }

import React from 'react'
import { featuresDataSection5 } from '../../Database'

const Item = ({ title, subtitle, img }) => {
  return (
    <div className='features-item col-lg-12'>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div>
        {img && <img src={img} alt='home-section-feature-5'/>}
      </div>
    </div>
  )
}

export default function Section5() {
  const featureItems = featuresDataSection5

  return (
    <section className='home-section-5'>
      <div className='container1'>
        <div className='row'>
          {featureItems.map(({ title, subtitle, img }, index) => (
            <div className='col-lg-6 col-md-6 d-flex' style={{padding: '0 30px'}} key={index}>
              <Item title={title} subtitle={subtitle} img={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Item }

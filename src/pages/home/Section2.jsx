import React, {useState} from 'react'
import { featuresDataSection2 } from '../../Database'
import SectionTitle from '../../components/SectionTitle'
import Typed from 'react-typed'
import PhonePlugin from '../../components/animators/PhonePlugin'
import SkipActivation from '../../components/animators/SkipActivation'
import PartDetection from '../../components/animators/PartDetection'

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

  const [tab, setTab] = useState(0)

  return (
    <section className='home-section-2'>
      <div className='container1'>
        <SectionTitle subtitle='Why Choose Us?' />

        <div className='row d-flex home-section2-tab-container' style={{borderBottom: `3px solid ${featureItems[0].color.default}`}}>
          {featureItems.map(({ title, color }, index) => (
            <div className='home-section2-tab' key={index}>
              <p                  
                style={{
                  color: tab === index ? color.selected : color.default,
                  borderBottom: tab === index ? `3px solid ${color.selected}` : `3px solid ${color.default}`
                }}
                onClick={()=>setTab(index)}
              >{title}</p>
            </div>
          ))}
        </div>

        <div className='row home-sec2-animation-row'>
          <div className='col-lg-6 home-sec2-animation-div'>
            {tab === 0 && <div className='typewritter-div'>
              <Typed 
                style={{fontWeight: 600}} 
                strings={['https://www.mobile-sentrix.com']} 
                typeSpeed = {80} 
                backDelay = {1100} 
                backSpeed = {30} 
                loop 
              />
            </div>}
            {tab === 1 && <PhonePlugin />}
            {tab === 2 && <SkipActivation />}
            {tab === 3 && <PartDetection />}
          </div>
          <div className='col-lg-6 home-sec2-content-div'>
            <p style={{fontWeight: 'bold'}}>{featureItems[tab].subtitle}</p>
            <p style={{fontWeight: 'normal'}}>{featureItems[tab].content}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export { Item }

import React from 'react'
import Button from '../../components/Button'
// import MobileScanning from '../../components/animators/MobileScanning'
import MobileSec1Scanner from '../../components/animators/MobileSec1Scanner'

export default function Section1() {
  return (
    <section className='home-section-1'>
      <div className='container1'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='home-section-1-content'>
              <h1>Completely diagnose multiple devices in 15 seconds!</h1>
              <Button title='Get Started' href='account' width='270px'></Button>
            </div>
          </div>
          <div className='col-lg-6 order-first order-lg-last'>
            {/* <MobileScanning cls='home-section-1-img'/> */}
            <MobileSec1Scanner />
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import showCaseImg from '../../img/cell-phone.png'
import Button from '../../components/Button'

export default function Section1() {
  return (
    <section className='home-section-1'>
      <div className='container1'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='home-section-1-content'>
              <h1>Completely diagnose multiple devices in 15 seconds!</h1>
              <Button title='Get Started' href='account'></Button>
            </div>
          </div>
          <div className='col-lg-6 order-first order-lg-last'>
            <div className='home-section-1-img'>
              <img src={showCaseImg} alt='product' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

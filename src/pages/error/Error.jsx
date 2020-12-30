import React from 'react'
import Button from '../../components/Button'
import Section from '../../components/Section'

export default function Error() {
  return (
    <Section
      title='Error 404!'
      subtitle='OOPS! THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST.'
      style={{ paddingTop: '150px' }}
    >
      <div className='row text-white text-center justify-content-center'>
        <div className='col-lg-8'>
          <p style={{color: 'black', marginBottom: '50px'}}>YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.</p>
          <Button title='Return to Home' href='/' />
        </div>
      </div>
    </Section>
  )
}

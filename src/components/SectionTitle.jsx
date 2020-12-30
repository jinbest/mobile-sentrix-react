import React from 'react'

export default function SectionTitle({ subtitle, isLeft=true }) {
  const getRowClasses = () => {
    let classes = 'row '
    return isLeft ? classes : (classes += 'justify-content-center')
  }

  const getColClasses = () => {
    return isLeft ? 'col-lg-12' : 'col-lg-9'
  }
  return (
    <div className={getRowClasses()}>
      <div className={getColClasses()}>
        <div className='section-title'>
          <h2 className='subtitle'>{subtitle}</h2>
        </div>
      </div>
    </div>
  )
}

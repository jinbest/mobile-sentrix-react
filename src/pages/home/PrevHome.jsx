import React from 'react'
import {Section1, Section2, Section3, Section4, Section5} from './'

const PrevHome = () => {
  const SectionItemComponents = [Section2, Section3, Section4, Section5]
  
  return (
    <div>
      <Section1 status='prev' />
      {SectionItemComponents.map((SectionItem, index) => {
        return (
          <SectionItem key={index}/>
        )
      })}
    </div>
  )
}

export default PrevHome

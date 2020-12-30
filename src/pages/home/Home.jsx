import React from 'react'
import {Section1, Section2, Section3, Section4, Section5} from './'

const Home = () => {
  const SectionItemComponents = [Section1, Section2, Section3, Section4, Section5]
  
  return (
    <div>
      {SectionItemComponents.map((SectionItem, index) => {
        return (
          <SectionItem key={index}/>
        )
      })}
    </div>
  )
}

export default Home

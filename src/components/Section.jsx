import React from 'react'
import SectionTitle from './SectionTitle'

export default function Section({
  className = '',
  children,
  title,
  subtitle,
  style,
}) {
  return (
    <section className={className} style={style}>
      <div className='container1'>
        {title && subtitle && (
          <SectionTitle title={title} subtitle={subtitle} />
        )}
        {children}
      </div>
    </section>
  )
}

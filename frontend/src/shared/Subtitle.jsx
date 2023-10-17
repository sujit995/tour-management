import React from 'react'
import './subtitle.css';

const Subtitle = ({subtitle, subheading}) => {
  return (
    <>
    <h3 className="section__subtitle">{subtitle}</h3>
    <h2 className="section__subheading">{subheading}</h2>
    </>
  )
}

export default Subtitle
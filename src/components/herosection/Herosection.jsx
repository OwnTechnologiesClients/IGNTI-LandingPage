import React from 'react'
import "./herosection.css"
import Banner from '../banner/Banner'
import Sidebanner from '../sidebanner/Sidebanner'

const Herosection = () => {
  return (
    <div className='banner-container'>
      <Banner />
      <Sidebanner />
    </div>
  )
}

export default Herosection


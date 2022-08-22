import React from 'react'
import { Icon } from '@iconify/react';
import './SelectOrigin.css'

function SelectOrigin({Closer}) {

  const closeSelect = () => {
    Closer(false)
  }

  return (
    <div className='SelectOrigin-Container'>
      <section style={{ color: "#ffffff" }} className='empty-div'>
      </section>
      <div className="box-selectOrigin">
        <div className='header-sOrigin'>
          <Icon onClick={closeSelect} style={{ color: "#ffffff", fontSize: "32px" }} icon="eva:arrow-ios-back-outline" />
          <span  style={{ position: "absolute", left: "0", right: "0" }} className='title-txts'>Origin</span>
          <span></span>
        </div>
        <span className='ch-txts'>Pleasse select your city.</span>
        <div className="OriginCity">
          <label>Origin city</label>
          <input className='origin-input' type="text" />
          <span className='input-bottom-txt'>Enter your city name Please</span>
        </div>
        <button style={{ position: "absolute", bottom: "0", left: "0", }} className='Continue-btn'>Confirm</button>
      </div>
    </div>
  )
}

export default SelectOrigin
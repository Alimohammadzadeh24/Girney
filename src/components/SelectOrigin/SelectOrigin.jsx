import React from 'react'

function SelectOrigin() {
  return (
    <div className='SelectOrigin-Container'>
        <header>
          <h3>Origin</h3>
        </header>
        <h4>Pleasse select your city.</h4>
        <div className="OriginCity">
            <label>Origin city</label>
            <input type="text" />
            <h4>Enter your city name Please</h4>
        </div>
        <button className='confirm-btn'>Confirm</button>
    </div>
  )
}

export default SelectOrigin
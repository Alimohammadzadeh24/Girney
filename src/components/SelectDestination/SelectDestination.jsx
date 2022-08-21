import React from 'react'

function SelectDestination() {
  return (
    <div className='SelectDistination-container'>
        <header>
          <h3>Destionation</h3>
        </header>
        <h4>Pleasse select your Destination city.</h4>
        <div className="OriginCity">
            <label>Destination</label>
            <input type="text" />
            <h4>Enter your Destination city name Please</h4>
        </div>
        <button className='confirm-btn'>Confirm</button>
    </div>
  )
}

export default SelectDestination
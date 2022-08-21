import React from 'react'
import FlyAirplane from '../../assets/img/flyAirplane.png'
import Avatars from '../../assets/img/FinalAvatars.png'

function Final() {
  return (
    <div className='final-container'>
        <header>
            <h3>Final Step</h3>
        </header>
        <h4>By pressing on the butten below, you will get the link that you need to travel from london to los angles .</h4>
        <div className='fly-box'>
            <div className='country-city'></div>
            <img src={FlyAirplane} alt="" />
            <div className='country-city'></div>
        </div>
        <div className='shareLink-box'>
            <img src={Avatars} alt="" />
            <h3>Need to share This Link ??</h3>
            <h4>By pressing on the button you can share this link to your friends as well .</h4>
            <button>
                <h3>Share</h3>
                {/* Share Icon */}
            </button>
        </div>
        <button>Go to the Website</button>
    </div>
  )
}

export default Final
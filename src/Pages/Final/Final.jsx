import React from 'react'
import FlyAirplane from '../../assets/img/flyAirplane.png'
import Avatars from '../../assets/img/FinalAvatars.png'
import { Icon } from '@iconify/react';
import './Final.css'

function Final() {
    return (
        <div className='final-container'>
            <div className='final-header'>
                <Icon style={{ color: "#ffffff", fontSize: "32px" }} icon="eva:arrow-ios-back-outline" />
                <span style={{ position: "absolute", left: "0", right: "0" }} className='title-txts'>Final Step</span>
                <span> </span>
            </div>
            <span style={{ width: "90vw" }} className='ch-txts'>By pressing on the butten below, you will get the link that you need to travel from london to los angles .</span>
            <div className='fly-box'>
                <div style={{marginBottom : "16px"}} className='country-city'>
                    <span className='title-txts'>London</span>
                </div>
                <img src={FlyAirplane} alt="" />
                <div style={{marginTop : "16px"}} className='country-city'>
                    <span className='title-txts'>LosAngles</span>
                </div>
            </div>
            <div className='shareLink-box'>
                <img style={{ width: "120px" }} src={Avatars} alt="" />
                <span className='share-title'>Need to share This Link ??</span>
                <span className='share-desc'>By pressing on the button you can share this link to your friends as well .</span>
                <button className='share-btn'>
                    <span>Share</span>
                    {/* Share Icon */}
                </button>
            </div>
            <button style={{ width: "90vw", position: "absolute", bottom: "0" }} className='Continue-btn'>Go to the Website</button>
        </div>
    )
}

export default Final
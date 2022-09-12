//imports
import React from 'react'
import FlyAirplane from '../../assets/img/flyAirplane.png'
import Avatars from '../../assets/img/FinalAvatars.png'
import { IoIosArrowBack } from 'react-icons/io'
import { BsShare } from 'react-icons/bs'
import './Final.css'
import { useSelector } from 'react-redux'
import { selectUserState } from '../../redux/auth/userReucer'
import { route_visa } from '../../defz'
//imports

function Final() {
    const userState = useSelector(selectUserState)
    const goPreviousPage = () => {
        window.location.href = route_visa
    }
    return (
        <div className='final-container'>
            <div className='final-header'>
                <section onClick={goPreviousPage}>
                    <IoIosArrowBack color='#FFFFFF' fontSize={'24px'} />
                </section>
                <span style={{ position: "absolute", left: "0", right: "0" }} className='title-txts'>Final Step</span>
                <span> </span>
            </div>
            <span style={{ width: "90vw" }} className='ch-txts'>By pressing on the butten below, you will get the link that you need to travel from london to los angles .</span>
            <div className='fly-box'>
                <div style={{ marginBottom: "16px" }} className='country-city'>
                    <span className='title-txts'>{userState.origin}</span>
                </div>
                <img src={FlyAirplane} alt="" />
                <div style={{ marginTop: "16px" }} className='country-city'>
                    <span className='title-txts'>{userState.destination}</span>
                </div>
            </div>
            <div className='shareLink-box'>
                <img style={{ width: "120px" }} src={Avatars} alt="" />
                <span className='share-title'>Need to share This Link ??</span>
                <span className='share-desc'>By pressing on the button you can share this link to your friends as well .</span>
                <button className='share-btn'>
                    <div className='share'>
                        <span>Share</span>
                        <BsShare color='#FFFFFF' />
                    </div>
                    {/* Share Icon */}
                </button>
            </div>
            <button style={{ width: "90vw", position: "absolute", bottom: "0" }} className='Continue-btn'>Go to the Website</button>
        </div>
    )
}

export default Final
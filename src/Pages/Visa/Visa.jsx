//imports
import './Visa.css'
import React, { useEffect, useState } from 'react'
import MenuVisa from '../../assets/img/menuVisa.png'
import Avatar from '../../assets/img/Avatar.png'
import SelectOrigin from '../../components/SelectOrigin/SelectOrigin'
import SelectDestination from '../../components/SelectDestination/SelectDestination'
import { useSelector } from 'react-redux'
import { route_final } from '../../defz'
import { selectUserState } from '../../redux/auth/userReucer'
//imports

function Visa() {

    //get state from redux store and show on console
    const userState = useSelector(selectUserState);
    //get state from redux store and show on console

    //create state and variable with hooks and document elelment
    const [showOriginSelector, setShowOriginSelector] = useState(false)
    const [showDestinationSelector, setShowDestinationSelector] = useState(false)
    const [btn2Disable, setBtn2Disable] = useState(true)
    const [btn3Disable, setBtn3Disable] = useState(true)
    const [img1, setImg1] = useState(false)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    //create state and variable with hooks and document elelment

    //change desiable/enable button style with redux state status and complete wizard setup
    useEffect(() => {
        if (userState.origin !== '') {
            setImg1(true)
            setBtn2Disable(false)
        }
        if (userState.destination !== '') {
            setImg2(true)
            setBtn3Disable(false)
        }
    })
    //change desiable/enable button style with redux state status and complete wizard setup

    //show origin/Destination component with click on origin/Destination button
    const showSelectOrigin = () => {
        setShowOriginSelector(true)
    }
    const showSelectDestination = () => {
        setShowDestinationSelector(true)
    }
    //show origin/Destination component with click on origin/Destination button

    //define onClick from Continue to Final Step Button
    const continueToFinal = (e) => {
        e.preventDefault();
        setImg3(true)
        setTimeout(() => {
            window.location.href = route_final;
        }, 1000)
    }
    //define onClick from Continue to Final Step Button

    return (
        <div className='visa-container'>
            <div className="divs-box">
                <div className='header'>
                    <img src={MenuVisa} alt="" />
                    <img src={Avatar} alt="" />
                </div>
                <div style={{textAlign : "center"}} className="start-section">
                    <span className='title-txts'>Start your Girney</span>
                    <span className='ch-txts'>We are Going to help you get your visa in just 3 simple steps</span>
                </div>
                <div className="wizard-start">
                    <div className="wizard">
                        <div className={img1 ? 'img1-done' : 'img1'}> </div>
                        <div className="text-box">
                            <span className='wizard-title'>Enter your Origin</span>
                            <span className='wizard-desc'>Please select your city</span>
                        </div>
                    </div>
                    <div className="wizard">
                        <div style={{
                            marginLeft: img1 ? '0px' : null
                        }} className={img2 ? 'img2-done' : 'img2'}> </div>
                        <div className="text-box">
                            <span className='wizard-title'>Enter your Destination</span>
                            <span className='wizard-desc'>Please select your Destination city</span>
                        </div>
                    </div>
                    <div className="wizard">
                        <div style={{
                            marginLeft: img1 ? '0px' : null
                        }} className={img3 ? 'img3-done' : 'img3'}> </div>
                        <div className="text-box">
                            <span className='wizard-title'>Press continue button</span>
                            <span className='wizard-desc'>we will direct you to the embassy wbsite</span>
                        </div>
                    </div>
                </div>
                <div className="visa-buttons">
                    <button id='btn1' onClick={showSelectOrigin} className='visa-btn'>{userState.origin !== '' ? `${userState.origin}` : "Enter Your Origin"}</button>
                    <button id='btn2' onClick={showSelectDestination} className='visa-btn' disabled={btn2Disable}>{userState.destination !== '' ? `${userState.destination}` : "Enter Your Destination"}</button>
                    <button id='btn3' onClick={continueToFinal} className='visa-btn' disabled={btn3Disable}>Continue</button>
                </div>
            </div>
            {showOriginSelector === true ? <SelectOrigin Closer={setShowOriginSelector} /> : null}
            {showDestinationSelector === true ? <SelectDestination Closer={setShowDestinationSelector} /> : null}
        </div>
    )

}

export default Visa
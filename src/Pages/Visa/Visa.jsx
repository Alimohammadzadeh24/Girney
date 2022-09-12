//imports
import React, { useState } from 'react'
import MenuVisa from '../../assets/img/menuVisa.png'
import Avatar from '../../assets/img/Avatar.png'
import './Visa.css'
import SelectOrigin from '../../components/SelectOrigin/SelectOrigin'
import SelectDestination from '../../components/SelectDestination/SelectDestination'
import { useSelector } from 'react-redux'
import { route_final } from '../../app/defz'
import { selectUserState } from '../../redux/auth/userReucer'
//imports

function Visa() {

    //get state from redux store and show on console
    const userState = useSelector(selectUserState)
    console.log(userState);
    //get state from redux store and show on console

    //create state and variable with hooks and document elelment
    const [showOriginSelector, setShowOriginSelector] = useState(false)
    const [showDestinationSelector, setShowDestinationSelector] = useState(false)
    const img1 = document.getElementsByClassName("img1")
    const img2 = document.getElementsByClassName("img2")
    const img3 = document.getElementsByClassName("img3")
    //create state and variable with hooks and document elelment

    //change desiable/enable button style with redux state status
    if (userState.origin !== '') {
        img1.classList.add('img1-done')
        img1.classList.remove('img1')
        // $('.img2').css({ "margin-left": "0px" })
        // $('.img3').css({ "margin-left": "0px" })
        document.getElementById("btn2").setAttribute('disabled', false)
        document.getElementById("btn2").addEventListener('click', () => {
            setShowDestinationSelector(true)
        })
    }
    if (userState.destination !== '') {
        const btn3 = document.getElementById("btn3")
        img2.classList.add('img2-done')
        img2.classList.remove('img2')
        btn3.setAttribute('disabled', false)
        btn3.addEventListener('click', (e) => {
            e.preventDefault();
            img3.classList.add('img3-done')
            img3.classList.remove('img3')
            setTimeout(() => {
                window.location.href = route_final;
            }, 1000)
        })
    }
    //change desiable/enable button style with redux state status

    //show origin component with click on origin button
    const showSelectOrigin = () => {
        setShowOriginSelector(true)
    }
    //show origin component with click on origin button

    return (
        <div className='visa-container'>
            <div className="divs-box">
                <div className='header'>
                    <img src={MenuVisa} alt="" />
                    <img src={Avatar} alt="" />
                </div>
                <div className="start-section">
                    <span className='title-txts'>Start your Girney</span>
                    <span className='ch-txts'>We are Going to help you get your visa in just 3 simple steps</span>
                </div>
                <div className="wizard-start">
                    <div className="wizard">
                        <div className="img1"> </div>
                        <div className="text-box">
                            <span className='wizard-title'>Enter your Origin</span>
                            <span className='wizard-desc'>Please select your city</span>
                        </div>
                    </div>
                    <div className="wizard">
                        <div className="img2"> </div>
                        <div className="text-box">
                            <span className='wizard-title'>Enter your Destination</span>
                            <span className='wizard-desc'>Please select your Destination city</span>
                        </div>
                    </div>
                    <div className="wizard">
                        <div className="img3"> </div>
                        <div className="text-box">
                            <span className='wizard-title'>Press continue button</span>
                            <span className='wizard-desc'>we will direct you to the embassy wbsite</span>
                        </div>
                    </div>
                </div>
                <div className="visa-buttons">
                    <button id='btn1' onClick={showSelectOrigin} className='visa-btn'>{userState.origin !== '' ? `${userState.origin}` : "Enter Your Origin"}</button>
                    <button id='btn2' className='visa-btn' disabled>{userState.destination !== '' ? `${userState.destination}` : "Enter Your Destination"}</button>
                    <button id='btn3' className='visa-btn' disabled>Continue</button>
                </div>
            </div>
            {showOriginSelector === true ? <SelectOrigin Closer={setShowOriginSelector} /> : null}
            {showDestinationSelector === true ? <SelectDestination Closer={setShowDestinationSelector} /> : null}
        </div>
    )

}

export default Visa
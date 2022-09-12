import React, { useState } from 'react'
import MenuVisa from '../../assets/img/menuVisa.png'
import Avatar from '../../assets/img/Avatar.png'
import './Visa.css'
import SelectOrigin from '../../components/SelectOrigin/SelectOrigin'
import SelectDestination from '../../components/SelectDestination/SelectDestination'
import $ from 'jquery'
import { connect } from 'react-redux'
import { route_final } from '../../defz'
function Visa({ state }) {
    const [showOriginSelector, setShowOriginSelector] = useState(false)
    const [showDestinationSelector, setShowDestinationSelector] = useState(false)
    console.log(state);
    if (state.origin !== '') {
        $('.img1').addClass('img1-done').removeClass('img1')
        $('.img2').css({ "margin-left": "0px" })
        $('.img3').css({ "margin-left": "0px" })
        $('#btn2').attr('disabled', false)
        $('#btn2').on('click', () => {
            setShowDestinationSelector(true)
        })
    }
    if (state.destination !== '') {
        $('.img2').addClass('img2-done').removeClass('img2')
        $('#btn3').attr('disabled', false)
        $('#btn3').on('click', (e) => {
            e.preventDefault();
            $('.img3').addClass('img3-done').removeClass('img3')
            setTimeout(() => {
                window.location.href = route_final;
            }, 1000)
        })
    }
    const showSelectOrigin = () => {
        setShowOriginSelector(true)
    }
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
                    <button id='btn1' onClick={showSelectOrigin} className='visa-btn'>{state.origin !== '' ? `${state.origin}` : "Enter Your Origin"}</button>
                    <button id='btn2' className='visa-btn' disabled>{state.destination !== '' ? `${state.destination}` : "Enter Your Destination"}</button>
                    <button id='btn3' className='visa-btn' disabled>Continue</button>
                </div>
            </div>
            {showOriginSelector === true ? <SelectOrigin Closer={setShowOriginSelector} /> : null}
            {showDestinationSelector === true ? <SelectDestination Closer={setShowDestinationSelector} /> : null}
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Visa)
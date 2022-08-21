import React from 'react'
import MenuVisa from '../../assets/img/menuVisa.png'
import Avatar from '../../assets/img/Avatar.png'
import './Visa.css'

function visa() {
    return (
        <div className='visa-container'>
            <div className="divs-box">
                <div className='header'>
                    <img src={MenuVisa} />
                    <img src={Avatar} />
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
                    <button className='visa-btn'>Enter Your Origin</button>
                    <button className='visa-btn'>Enter your Destination</button>
                    <button className='visa-btn'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default visa
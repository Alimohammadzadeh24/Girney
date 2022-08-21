import React from 'react'
import './VerifyLogin.css'
import MessageIcon from '../../assets/img/MessageIcon.png'
import toast, { Toaster } from 'react-hot-toast';
// import $ from 'jquery'
import VerificationInput from "react-verification-input";
function VerifyLogin() {
  const LoginButton = (e) => {
    e.preventDefault();
    toast.error("Please Enter The Right Code")
  }
  return (
    <div className='VerifyLogin-container'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="main-box">
        <div className='top-section'>
          <div className="bg-verify-icon">
            <img src={MessageIcon} alt="" />
          </div>
          <span className='title-txts'>Check your phone</span>
          <span className='ch-txts'>we sent a code to 098123456788</span>
        </div>
        <div className="verify-section">
          <div style={{marginBottom : "26px"}}>
            <VerificationInput
            placeholder=' '
            length={6}
              classNames={{
                container: "container-v",
                character: "character-v",
                characterInactive: "character-inactive-v",
                characterSelected: "character-selected-v",
              }}
            />
          </div>
          <button onClick={LoginButton} className='Continue-btn'>Login</button>
        </div>
        <div className="bottom-section">
          <div style={{ marginBottom: "32px" }}>
            <span className='text-agains'>Didn't receive the email?</span> <span style={{ color: "#8D1EFD" }} className='text-agains'> Click to resend</span>
          </div>
          {/* <div>
            <img src={GmailIcon} alt="" />
            <h3>Opening Gmail App</h3>
          </div> */}
          <span className='ch-txts'>Back to log in</span>
        </div>
      </div>
    </div>
  )
}

export default VerifyLogin
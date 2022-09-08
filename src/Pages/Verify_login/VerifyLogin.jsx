// import React, { useState } from 'react'
import './VerifyLogin.css'
import MessageIcon from '../../assets/img/MessageIcon.png'
import toast, { Toaster } from 'react-hot-toast';
// import $ from 'jquery'
import VerificationInput from "react-verification-input";
import { Icon } from '@iconify/react';
import { endpoint } from '../../defz';
import { connect } from 'react-redux';
function VerifyLogin(props) {
  console.log(props.state);
  // const [code, setCode] = useState("111234")
  const code = "111234"
  const codeVerifyOnChange = e => {
    // setCode(e.target.value)
    // console.log(e.target.value);
    // console.log(code);
  }
  const LoginButton = async (e) => {
    e.preventDefault();
    toast.error("Please Enter The Right Code")
    const verifyCodeReqBody = {
      "phone_number" : "+989025235394",
      "otp" : code
    }
    await fetch(`${endpoint}/users/auth/otp/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: verifyCodeReqBody
    }).then(response => {
      if (response.status === 204) {
        window.location.href = "/visa"
      }
    })
  }
  const backToLogin = () => {
    window.location.href = "/login"
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
          <span className='ch-txts'>we sent a code to +{props.state.phone_number}</span>
        </div>
        <div className="verify-section">
          <div style={{ marginBottom: "26px" }}>
            <VerificationInput
              // value={code}
              onChange={codeVerifyOnChange}
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
        </div>
        <div className="bottom-section">
          <div style={{ marginBottom: "32px" }}>
            <span className='text-agains'>Didn't receive the email?</span> <span style={{ color: "#8D1EFD" }} className='text-agains'> Click to resend</span>
          </div>
          {/* <div>
            <img src={GmailIcon} alt="" />
            <h3>Opening Gmail App</h3>
          </div> */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={backToLogin}
            className='ch-txts'
          >
            <Icon style={{ marginRight: "4px" }} icon="eva:arrow-back-outline" />Back to log in
          </span>
        </div>
      </div>
      <button onClick={LoginButton} className='Continue-btn'>Login</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    state : state
  }
}
export default connect(mapStateToProps)(VerifyLogin)
import React, { useState } from 'react'
import Logo from '../../assets/img/LogoGirney.png'
import GoogleIcon from '../../assets/img/googleIcon.png'
import FacebookIcon from '../../assets/img/FaceIcon.png'
import './Login.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import toast, { Toaster } from 'react-hot-toast';
import { endpoint } from '../../defz'
import { selectUserNumber } from '../../redux/auth/userSelector'
import Connect  from 'react-redux'

function Login({phone_number}) {
  const [phone, setPhone] = useState("")
  var handleOnChange = (value) => {
    setPhone(value)
  };
  const reqBody = {
    "phone_number": `+${phone}`
  }

  const sendReq = async (e) => {
    e.preventDefault();
    if (phone === "") {
      toast.error("Please Enter your phone number")
    } else {
      await fetch(`${endpoint}/users/auth/otp`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: reqBody
      }).then((res) => {
        if (res.status === 204) {
          window.location.href = "/verify_login"
        }
      })
    }
  }
  return (
    <div className='Login-container'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="main-box">
        <div className="top-section">
          <img style={{ width: "48px", marginBottom: "24px" }} src={Logo} alt="" />
          <span className='title-txts'>Welcome to Girney</span>
          <span className='ch-txts'>Please enter your detailes.</span>
        </div>
        <span className='ch-txts'>Sign in</span>
        <hr style={{ marginTop: "8px" }} />
        <div className="email-section">
          <div className="btns">
            <PhoneInput
              name="phoneNumber"
              type="number"
              regions={['north-america', 'south-america', 'central-america', 'carribean', 'eu-union', 'ex-ussr', 'ex-yugos', 'baltic', 'middle-east', 'north-africa']}
              enableAreaCodes={true}
              enableSearch={true}
              areaCodes={{ us: ["332"] }}
              inputProps={{
                name: "phone",
                country: "us",
                required: true,
                autoFocus: true
              }}
              value={phone}
              onChange={handleOnChange}
              // Set your inline styles here
              containerStyle={{
                border: "none",
                marginBottom: "16px"
              }}
              inputStyle={{
                background: "#ffffff",
                border: "none",
                width: "100%",
                borderRadius: "8px",
                height: "44px",
                fontFamily: "Inter-Medium"
              }}
              dropdownStyle={{
                width: "90vw"
              }}
              searchStyle={{
                width: "90%",
                borderRadius: "8px",
                padding: "8px"
              }}
              buttonStyle={{
                border: "none",
                outline: "none"
              }}
              required
            />
            <button onClick={sendReq} className='Continue-btn'>Continue with phone number</button>
          </div>
        </div>
        <div className="or">
          <hr style={{ width: "100%" }} />
          <span style={{ margin: "0 4px 32px 4px" }} className='ch-txts'>OR</span>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="gooface-section">
          <div className="btns">
            <button className='btn-sign-gooface'>
              <section className='btn-content'>
                <img style={{ marginRight: "12px" }} src={GoogleIcon} alt="" />
                <div className='btn-txt-sec'>
                  <span style={{ color: "#344054", fontWeight: "500" }}>Continue with Google</span>
                </div>
              </section>
            </button>
            <button className='btn-sign-gooface'>
              <section className='btn-content'>
                <img style={{ marginRight: "12px" }} src={FacebookIcon} alt="" />
                <div className='btn-txt-sec'>
                  <span style={{ color: "#344054", fontWeight: "500" }}>Continue with Faceook</span>
                </div>
              </section>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   phone_number: selectUserNumber(state),
// });

// export default Connect(mapStateToProps)(Login)
export default Login;
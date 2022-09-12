//imports
import './SelectOrigin.css'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import CountryData from '../../app/CountruData.json'
import { IoIosArrowBack } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { setUserOrigin } from '../../redux/auth/userActions';
//imports

function SelectDestination(props) {
  const dispatch = useDispatch();
  const closeSelect = () => {
    props.Closer(false)
  }

  //define and create state and variable with hooks and document element
  const [searchedArray, setSearchedArray] = useState(CountryData);
  const [searchString, setSearchString] = useState("");
  const [originCity, setOriginCity] = useState("")
  const inputBottomText = document.getElementsByClassName("input-bottom-txt")
  const originListBox = document.getElementsByClassName("origin-list-box")
  const boxSelectOrigin = document.getElementsByClassName("box-selectOrigin")
  //define and create state and variable with hooks and document element

  //create show search resualt after search on input with useEffect
  useEffect(() => {
    if (searchString.length === 0) {
      setSearchedArray(CountryData)
    } else {
      const searchedObjects = []
      CountryData.forEach((singleCountryObject, index) => {
        Object.values(singleCountryObject).every((onlyValues, valIndex) => {
          if (onlyValues.toLowerCase().includes(searchString.toLowerCase())) {
            searchedObjects.push(singleCountryObject)
            return;
          }
        })
      })
      setSearchedArray(searchedObjects)
    }
  }, [searchString])
//create show search resualt after search on input with useEffect

  //change component element style with search input status----------
  const checkValueInput = (e) => {
    setSearchString(e.target.value)
    if (e.target.value !== "") {
      inputBottomText.style.display = "none";
      originListBox.style.display = "block";
      boxSelectOrigin.style.height = "100vh";
    } else {
      inputBottomText.style.display = "block";
      originListBox.style.display = "none";
      boxSelectOrigin.style.height = "40vh";
    }
  }
  //change component element style with search input status----------

  //Close component and dispatch origin state----------
  const confirmOrigin = () => {
    dispatch(setUserOrigin(originCity.toString()));
    props.Closer(false);
  }
  //Close component and dispatch origin state----------

  return (
    <div className='SelectOrigin-Container'>
      <section onClick={closeSelect} style={{ color: "#ffffff" }} className='empty-div'>
      </section>
      <div className="box-selectOrigin">
        <div className="selectOriginDivs">
          <div className='header-sOrigin'>
            <div onClick={closeSelect} style={{ width: "32px", height: "32px" }}>
              <IoIosArrowBack color='#FFFFFF' fontSize={'24px'} />
            </div>
            <span style={{ position: "absolute", left: "0", right: "0" }} className='title-txts'>Origin</span>
            <span></span>
          </div>
          <span className='ch-txts'>Pleasse select your city.</span>
          <div className="OriginCity">
            <label>Origin city</label>
            <input className='origin-input' value={searchString} onChange={checkValueInput} />
            <span className='input-bottom-txt'>Enter your city name Please</span>
            <div className="origin-list-box">
              {
                searchedArray.map((item, index) => {
                  return (
                    <div className='OriginsItem' onClick={() => {
                      originListBox.style.display = "none"
                      document.getElementsByClassName("origin-input").value = `${item.city}`
                      inputBottomText.style.display = "block"
                      boxSelectOrigin.style.height = "40vh"
                      document.getElementsByClassName("Continue-btn").removeAttribute('disabled', false)
                      setOriginCity(`${item.city}`)
                    }} key={index}>
                      <Icon style={{ color: "#B770FE", marginRight: "10px", fontSize: "24px" }} icon="cil:location-pin" />
                      <span className='origins-country'>{item.country},</span>
                      <span className='origins-capital'>{item.city}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <button onClick={confirmOrigin} id='confirm-origin' style={{ position: "absolute", bottom: "0", width: "90vw" }} className='Continue-btn' disabled>Confirm</button>
        </div>
      </div>
    </div>
  )
}


export default SelectDestination
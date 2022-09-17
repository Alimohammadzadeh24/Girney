//imports
import './SelectDestination.css'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import CountryData from '../../CountruData.json'
import { IoIosArrowBack } from 'react-icons/io'
import { setUserDestination } from '../../redux/auth/userActions';
import { useDispatch } from 'react-redux';
import useDetectKeyboardOpen from "use-detect-keyboard-open";
//imports

function SelectDestination(props) {
  const dispatch = useDispatch();
  const closeSelect = () => {
    props.Closer(false)
  }

  //define and create state and variable with hooks and document element
  const [searchedArray, setSearchedArray] = useState(CountryData);
  const [searchString, setSearchString] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [searchInputValueStatus, setSearchInputValueStatus] = useState(false);
  const [DestinationContinue, setDestinationContinue] = useState(false);
  //define and create state and variable with hooks and document element

  //keyboard status detector 
  const isKeyboardOpen = useDetectKeyboardOpen();
  //keyboard status detector

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
    if (searchString !== "") {
      setSearchInputValueStatus(true)
    } else {
      setSearchInputValueStatus(false)
    }
  }
  //change component element style with search input status----------

  //Close component and dispatch Destination state----------
  const confirmDestination = () => {
    dispatch(setUserDestination(destinationCity.toString()))
    props.Closer(false);
  }
  //Close component and dispatch Destination state----------

  return (
    <div className='SelectOrigin-Container'>
      <section onClick={closeSelect} style={{ color: "#ffffff" }} className='empty-div'>
      </section>
      <div style={{
        height: searchInputValueStatus ? '100vh' : '40vh'
      }}
        className="box-selectOrigin">
        <div className="selectOriginDivs">
          <div className='header-sOrigin'>
            <div onClick={closeSelect} style={{ width: "32px", height: "32px" }}>
              <IoIosArrowBack color='#FFFFFF' fontSize={'24px'} />
            </div>
            <span style={{ position: "absolute", left: "0", right: "0", textAlign: "center" }} className='title-txts'>Destination</span>
            <span></span>
          </div>
          <span className='ch-txts'>Please select your city.</span>
          <div className="OriginCity">
            <label>Destination city</label>
            <input className='origin-input' value={searchString} onChange={checkValueInput} />
            <span style={{
              display: searchInputValueStatus ? 'none' : 'block'
            }} className='input-bottom-txt'>Enter your city name Please</span>
            <div style={{
              display: searchInputValueStatus ? 'block' : 'none'
            }} className="origin-list-box">
              {
                searchedArray.map((item, index) => {
                  return (
                    <div className='OriginsItem' onClick={() => {
                      setSearchInputValueStatus(false)
                      setDestinationCity(`${item.city}`)
                      setSearchString(`${item.city}`)
                      setDestinationContinue(true)
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
          {isKeyboardOpen ? null : <button onClick={confirmDestination} id='confirm-origin' style={{ position: "absolute", bottom: "0", width: "90vw" }} className='Continue-btn' disabled={!DestinationContinue}>Confirm</button>}
        </div>
      </div>
    </div>
  )
}
export default SelectDestination
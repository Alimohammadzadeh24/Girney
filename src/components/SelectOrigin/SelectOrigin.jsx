import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import './SelectOrigin.css'
import CountryData from '../../CountruData.json'
import $ from 'jquery'
function SelectOrigin({ Closer }) {
  const closeSelect = () => {
    Closer(false)
  }
  const [countries, setCountries] = useState(CountryData)
  const [inputValueCheck, setInputValueCheck] = useState(false)
  const [searchedArray, setSearchedArray] = useState(CountryData);
  const [searchString, setSearchString] = useState("");

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

  const checkValueInput = (e) => {
    //this line for develop
    setSearchString(e.target.value)
    //this line for develop
    if (e.target.value !== "") {
      setInputValueCheck(true)
      $(".input-bottom-txt").css({ "display": "none" })
      $(".origin-list-box").css({ "display": "block" })
      $(".box-selectOrigin").css({ "height": "100vh" })
    } else {
      $(".input-bottom-txt").css({ "display": "block" })
      $(".origin-list-box").css({ "display": "none" })
      $(".box-selectOrigin").css({ "height": "40vh" })
    }

  }

  const selectOrigin = () =>{
    
  }

  return (
    <div className='SelectOrigin-Container'>
      <section style={{ color: "#ffffff" }} className='empty-div'>
      </section>
      <div className="box-selectOrigin">
        <div className="selectOriginDivs">
          <div className='header-sOrigin'>
            <Icon onClick={closeSelect} style={{ color: "#ffffff", fontSize: "32px" }} icon="eva:arrow-ios-back-outline" />
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
                    <div className='OriginsItem' onClick={selectOrigin} key={index}>
                      <Icon style={{ color: "#B770FE", marginRight: "10px", fontSize: "24px" }} icon="cil:location-pin" />
                      <span className='origins-country'>{item.country},</span>
                      <span className='origins-capital'>{item.city}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <button style={{ position: "absolute", bottom: "0", width: "90vw" }} className='Continue-btn'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default SelectOrigin
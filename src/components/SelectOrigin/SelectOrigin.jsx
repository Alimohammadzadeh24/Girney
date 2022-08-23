import React , {useState} from 'react'
import { Icon } from '@iconify/react';
import './SelectOrigin.css'
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

function SelectOrigin({Closer}) {
  const closeSelect = () => {
    Closer(false)
  }
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });

  return (
    <div className='SelectOrigin-Container'>
      <section style={{ color: "#ffffff" }} className='empty-div'>
      </section>
      <div className="box-selectOrigin">
        <div className='header-sOrigin'>
          <Icon onClick={closeSelect} style={{ color: "#ffffff", fontSize: "32px" }} icon="eva:arrow-ios-back-outline" />
          <span  style={{ position: "absolute", left: "0", right: "0" }} className='title-txts'>Origin</span>
          <span></span>
        </div>
        <span className='ch-txts'>Pleasse select your city.</span>
        <div className="OriginCity">
          <label>Origin city</label>
          <select className='origin-input' value={selectedCountry} onChange={(e) => selectCountryHandler(e.target.value)}>
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
          <span className='input-bottom-txt'>Enter your city name Please</span>
        </div>
        <button style={{ position: "absolute", bottom: "0", left: "0", }} className='Continue-btn'>Confirm</button>
      </div>
    </div>
  )
}

export default SelectOrigin
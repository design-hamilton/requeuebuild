import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../../../contextApi/Provider";
import { SaveLocalStorage } from "../../../../helpers/localStorage";
import { userByMobile } from "../../../../helpers/apiCalls/apiGet";

// import { formatPhoneNumberIntl } from 'react-phone-number-input'
// formatPhoneNumberIntl('+12133734253') === '<strong>+1</strong> 213 373 4253'

const PhoneNumber = () => {
  const { countries, authToken, guestfrommobile } = useContext(GlobalContext);

  const [showCountries, setShowCountries] = useState(true);

  const [value, setValue] = useState();
  const [cntry, setCntry] = useState({
    id: 1,
    name: "Kuwait",
    nameAR: "الكويت",
    flag: "https://cdn.requeue.net/media/flags/kw.png",
  });
  const [countriesz, setCountriesz] = useState([
    {
      id: 1,
      name: "Kuwait",
      nameAR: "الكويت",
      flag: "https://cdn.requeue.net/media/flags/kw.png",
    },
  ]);
  useEffect(() => {
    if (countries[0]) {
      setCountriesz(countries[0]);
    }
  });

  // useEffect(() => {
  //     if(countriesz[0]) {
  //         setCntry(countriesz[0]);
  //       }
  // },[countriesz])

  const handleSelectCountry = (e) => {
    setCntry(e);
    setShowCountries(!showCountries);
    // SaveLocalStorage("country")
  };
  const handleDisabled = () => {
    alert("Please Select Another country");
  };

  const handleGetUserByMobile = (e) => { 
    const token = authToken[0];
    const cid = cntry.id;
    const mobile = e;
    userByMobile(token, cid, mobile)
      .then((response) => {
        if (response.data.success) {
          guestfrommobile[1](response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
        
        guestfrommobile[1]({"country":cid,"phone":mobile});
      });
  };
  
  const handleClearMobile = (e) => {  
    const cid = cntry.id;
    const mobile = e;
    guestfrommobile[1]({"country":cid,"phone":mobile}); 
  
};
  
//   console.log(guestfrommobile[0]);

  const _countrieslist = countriesz.map((cl) => (
    <li
      key={cl.id}
      className={cl.restActive ? "" : "disabled"}
      onClick={
        cl.restActive ? (e) => handleSelectCountry(cl) : () => handleDisabled()
      }>
      <img className="w-66-imgPhone" src={cl.flag} />
      <div>
        <h3>{cl.name}</h3>
        <p>{cl.code}</p>
      </div>
    </li>
  ));

  return ( 
    <div className="fxlx-ggn">
      <>
        <img
          className="w-66-imgPhone"
          src={cntry.flag}
          onClick={() => setShowCountries(!showCountries)}
        />
      </>
      <ul className={showCountries ? "expandPhone" : "expandPhone expShow"}>
        {_countrieslist}
      </ul>
      <input
        placeholder="Enter phone number"
    //    defaultValue={props.value}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={(e) => {
            if(e.target.value.length > 7 ) {
                handleGetUserByMobile(e.target.value);
              }else if(e.target.value.length < 7 ) {
                handleClearMobile(e.target.value);
              }
        }}
        className="PhoneInputInput"
      />
    </div>
  );
};

export default PhoneNumber;

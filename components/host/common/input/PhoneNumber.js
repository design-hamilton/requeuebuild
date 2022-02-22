import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState, useEffect } from 'react';



import { formatPhoneNumberIntl } from 'react-phone-number-input'
formatPhoneNumberIntl('+12133734253') === '<strong>+1</strong> 213 373 4253'



const PhoneNumber = () => {
    const [value, setValue] = useState()
    return (
        <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue} 
        placeholder="MOBILE NUMBER"
        name="popupNumber" 
        international={true}
    //  onChange={onValueChange}
    //  onBlur={handleInputBlur}
    //  onFocus={handleInputFocus}
    //  style
        defaultCountry="KW"
        countries={["KW", "SA", "AE", "QA", "BH"]}
        />
    )
}

export default PhoneNumber

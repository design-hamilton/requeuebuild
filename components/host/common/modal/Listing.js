import React from 'react'
import {ULStyle} from '../../styled/common.styled';
 
const Listing = ({listItem,handleSelect,value}) => {

    const _listing = listItem.map((l,key)=> <li className={l.name === value.name ? "active" : ""} key={key} onClick={()=>handleSelect(l)}>{l.name}</li>)

    return ( 
                <ULStyle className="w-100"> 
                    {_listing}
                </ULStyle>  
    )
}

export default Listing

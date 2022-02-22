import React from 'react'
import {ULStyle} from '../styled/common.styled';
 
const InlineList = ({listItem,handleSelect,value}) => {

    const _listing = listItem.map(l=> <li className={l.name === value ? "active" : ""} key={l.name} onClick={()=>handleSelect(l)}>{l.name}</li>)

    return ( 
                <ULStyle className="w-100"> 
                    {_listing}
                </ULStyle>  
    )
}

export default InlineList

import React from 'react'
import { ChairsULStyleInline } from '../../styled/common.styled';

const Chairs = ({ chairsItem, handleSelect, value }) => {

    const _Chairslisting = chairsItem.map(l=> <li className={l.name === value ? "active" : ""} key={l.name} onClick={()=>handleSelect(l)}><div>{l.name}</div></li>)

    return (
        <ChairsULStyleInline className="w-100"> 
            {_Chairslisting}
        </ChairsULStyleInline>
    )
}

export default Chairs

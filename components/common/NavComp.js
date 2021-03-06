import { FaBars, FaSlidersH } from 'react-icons/fa';
import { NavTopStyle, NavBotStyle } from '../styled/common.styled';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NavComp = ({ title ,handleToggle , home, pathinsideoutside,count}) => {

    // const ttl = pathinsideoutside.toString();

    const [chaircount, setChaircount] = useState("ALL");

    const chaircounts = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }, { name: "9" }, { name: "ALL" }];

    const _list = chaircounts.map(l => <p className={l.name === chaircount ? "active" : ""} key={l.name} onClick={() => setChaircount(l.name)}>{l.name}</p>)
 

    return (
        <>
            <NavTopStyle>
                <span>
                    {/* <Link href={home}> */}
                        <FaBars onClick={home}/>
                    {/* </Link> */}

                </span>
                <Link href={pathinsideoutside}>
                    <p className="pointer">{title}</p>
                </Link>
                <h1>{count?count:'00'}</h1>
            </NavTopStyle>

            <NavBotStyle>
                <span>
                    <FaSlidersH onClick={()=>handleToggle()} />
                </span>

                
                {_list}
            </NavBotStyle>
             
        </>
    )
}

export default NavComp

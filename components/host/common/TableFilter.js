import { FaSlidersH } from "react-icons/fa"
import { BgSelectable, NavBotStyle, TableFilterMain } from "../styled/common.styled"
import Input from "./input/Input"
import Link from 'next/link';
import { useState, useEffect } from 'react';


function TableFilter({ title, home }) {

  const ttl = title;

  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand(!expand);
  }

  const [listingtoshow, setListingtoshow] = useState("ALL");
  const lists = [{ name: "ALL" }, { name: "1-2" }, { name: "2-4" }, { name: "4-6" }, { name: "6-8" }, { name: "8-12+" }];
  const _list = lists.map(l => <p className={l.name === listingtoshow ? "active" : ""} key={l.name} onClick={() => setListingtoshow(l.name)}>{l.name}</p>)

  const [availibility, setAvailibility] = useState("ALL");
  const avalibilities = [{ name: "ALL" }, { name: "Busy" }, { name: "Available" }];
  const _avail = avalibilities.map(l => <p className={l.name === availibility ? "active" : ""} key={l.name} onClick={() => setAvailibility(l.name)}>{l.name}</p>)

  const [outsideindise, setOutsideindise] = useState("ALL");
  const inout = [{ name: "ALL" }, { name: "Outside" }, { name: "Inside" }];
  const _inout = inout.map(l => <p className={l.name === outsideindise ? "active" : ""} key={l.name} onClick={() => setOutsideindise(l.name)}>{l.name}</p>)

  const [familysingle, setFamilysingle] = useState("ALL");
  const fmlysngl = [{ name: "ALL" }, { name: "Family" }, { name: "Single" }];
  const _fmlysngl = fmlysngl.map(l => <p className={l.name === familysingle ? "active" : ""} key={l.name} onClick={() => setFamilysingle(l.name)}>{l.name}</p>)

  const [seatingarea, setSeatingarea] = useState("ALL");
  const sarea = [{ name: "ALL" }, { name: "Balcony" }, { name: "Up stairs" }, { name: "Non smoking" }, { name: "Ground floor" }];
  const _sarea = sarea.map(l => <p className={l.name === seatingarea ? "active" : ""} key={l.name} onClick={() => setSeatingarea(l.name)}>{l.name}</p>)


  return (
    <TableFilterMain className={expand ? 'expand' : ''}>

      <NavBotStyle>
        <h1>
          <FaSlidersH onClick={() => handleToggle()} />
        </h1>
        <Input placeholder="Table number " />

        {_list}

      </NavBotStyle>
      {expand ?
        <>
          <div className="insi">
            <BgSelectable>
              <NavBotStyle>
                {_avail}
              </NavBotStyle>
            </BgSelectable>
            <BgSelectable>
              <NavBotStyle>
                {_inout}
              </NavBotStyle>
            </BgSelectable>
          </div>
          <div  className="insi">
            <BgSelectable>
              <NavBotStyle>
                {_fmlysngl}
              </NavBotStyle>
            </BgSelectable>
            <BgSelectable>
              <NavBotStyle>
                {_sarea}
              </NavBotStyle>
            </BgSelectable>
          </div>
        </>
        : ''}
    </TableFilterMain>
  )
}

export default TableFilter
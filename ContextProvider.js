import React, { createContext, useState } from "react";

export const GlobalContext = createContext(); // you can set a default value inside createContext if you want


export default function ContextProvider({ children }) {
  const [city, setCity] = useState("S");
  const [msg, setMsg] = useState(false);
  const [lst, setLst] = useState(false);
  const [listViewCls, setListViewCls] = useState(); 
  const [gridViewCls, setGridViewCls] = useState(); 
  return (
    <GlobalContext.Provider
      value={[city, setCity]}
      value1={[msg, setMsg]}
      value2={[lst, setLst]}
      value3={[listViewCls, setListViewCls]}
      value4={[gridViewCls, setGridViewCls]}
      
      
      >
      {children}
    </GlobalContext.Provider>
  );
}
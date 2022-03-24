import React, { createContext, useState } from "react";

export const GlobalContext = createContext(); // you can set a default value inside createContext if you want

export const Provider = ({children}) => {
    const [authToken, setAuthToken] = useState(0); 
    const [user, setUser] = useState(); 
    const [outsidequeue, setOutsidequeue] = useState([]); 
    const [insidequeue, setInsidequeue] = useState([]); 
    const [outsidehold, setOutsidehold] = useState([]); 
    const [insidehold, setInsidehold] = useState([]); 
    const [outsidehistory, setOutsidehistory] = useState([]); 
    const [insidehistory, setInsidehistory] = useState([]); 
    const [loading, setLoading] = useState(true); 

    
  return (
        <GlobalContext.Provider value={{user: [user, setUser], insidehold:[insidehold, setInsidehold], outsidehold:[outsidehold, setOutsidehold],insidehistory:[insidehistory, setInsidehistory], outsidehistory:[outsidehistory, setOutsidehistory], outsidequeue:[outsidequeue, setOutsidequeue], insidequeue:[insidequeue, setInsidequeue], authToken: [authToken, setAuthToken],loading: [loading, setLoading]}}>
         {children}
        </GlobalContext.Provider>
  )
}
 
import React, { createContext, useState } from "react";

export const GlobalContext = createContext(); // you can set a default value inside createContext if you want

export const Provider = ({children}) => {
    const [authToken, setAuthToken] = useState(0); 
    const [user, setUser] = useState(); 
    const [loading, setLoading] = useState(true); 

    
  return (
        <GlobalContext.Provider value={{user: [user, setUser], authToken: [authToken, setAuthToken],loading: [loading, setLoading]}}>
         {children}
        </GlobalContext.Provider>
  )
}
 
import { useRouter } from "next/router" 
import { useEffect } from "react";
import { GetLocalStorage } from "../helpers/localStorage";


// import React, { useEffect } from "react";
// import Router from 'next/router'
  
export default function Home() { 
  const router = useRouter();
  useEffect(() => {
    const pathname = router.pathname
    if(pathname == '/' ){
        router.push('home')
    }
  });
return(
  <>
    <h1>load</h1>
  </>
)
}




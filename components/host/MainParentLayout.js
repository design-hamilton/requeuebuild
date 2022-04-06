import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contextApi/Provider";
import { checkLogin } from "../../helpers/checkLogin";


const MainParentLayout = (props) => {
    const router = useRouter();
  const { authToken, loading, insidequeue,outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,settings,countries,seatingarea} = useContext(GlobalContext);
  // checkLogin(authToken, router, loading, insidequeue, outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,settings,countries,seatingarea);   
  
  useEffect(() => { 
    checkLogin(authToken, router, loading, insidequeue, outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,settings,countries,seatingarea);   
    const interval = setInterval(() => {
      checkLogin(authToken, router, loading, insidequeue, outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,settings,countries,seatingarea);  
    }, 4000);
    return () => clearInterval(interval); 
  },[]);


  return (
      <>
    {loading[0] === false ? (
        <>{props.fullpage}</>
    ) : (
        <p>loading...</p>
      )}
      </>
  )
}

export default MainParentLayout
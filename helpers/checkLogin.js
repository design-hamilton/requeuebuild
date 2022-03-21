/*import { useContext } from "react";
import { GlobalContext } from "../contextApi/Provider";

const {user, authToken} = useContext(GlobalContext);
*/



import {  useRouter } from "next/router";
import { GetLocalStorage, RemoveLocalStorage } from "./localStorage";

export const checkLogin = (authToken,router,loading)=>{ 
    // RemoveLocalStorage("token")
    let token = GetLocalStorage('token'); 
    if(token){
        authToken[1](token);
        loading[1](false)
    }else{
        authToken[1]();
        router.push('login');
        loading[1](false);
        console.log(loading)
    }
}
 

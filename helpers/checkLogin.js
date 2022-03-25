/*import { useContext } from "react";
import { GlobalContext } from "../contextApi/Provider";

const {user, authToken} = useContext(GlobalContext);
*/



import {  useRouter } from "next/router";
import { queueList,holdList,historyList, statsData } from "./apiCalls/apiGet";
import { GetLocalStorage, RemoveLocalStorage } from "./localStorage";

export const checkLogin = (authToken,router,loading,insidequeue,outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,statistics)=>{ 
    // RemoveLocalStorage("token");
    let token = GetLocalStorage('token'); 
    if(token){
        authToken[1](token);
        loading[1](false); 
       
            statsData(token).then((response) => { 
                let statData = response.data.data; 
                if(response.data.success){ 
                    statistics[1](statData); 
                    console.log(statistics[0]);
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 

            queueList(token).then((response) => { 
                let outsidedata = response.data.data.outside;
                let insidedata = response.data.data.inside;
                if(response.data.success){ 
                    outsidequeue[1](outsidedata);
                    insidequeue[1](insidedata);
                    // console.log(response.data); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 

              holdList(token).then((response) => { 
                let outsideholddata = response.data.data.outside;
                let insideholddata = response.data.data.inside;
                if(response.data.success){ 
                    outsidehold[1](outsideholddata);
                    insidehold[1](insideholddata);
                    // console.log(response.data); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 


              historyList(token).then((response) => { 
                let outsidehistorydata = response.data.data.outside;
                let insidehistorydata = response.data.data.inside;
                if(response.data.success){ 
                    outsidehistory[1](outsidehistorydata);
                    insidehistory[1](insidehistorydata); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 

    }else{
        authToken[1]();
        router.push('login');
        loading[1](true); 
    }
}
 

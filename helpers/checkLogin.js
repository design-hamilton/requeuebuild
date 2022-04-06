/*import { useContext } from "react";
import { GlobalContext } from "../contextApi/Provider";

const {user, authToken} = useContext(GlobalContext);
*/



import { getCookie, setCookies } from "cookies-next";
import {  useRouter } from "next/router";
import { queueList,holdList,historyList, statsData, settingsData, countriesList, userByMobile, seatingArea } from "./apiCalls/apiGet";
import { GetLocalStorage, RemoveLocalStorage } from "./localStorage";

export const checkLogin = (authToken,router,loading,insidequeue,outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,settings,countries,seatingarea)=>{ 
    // RemoveLocalStorage("token");
    let token = getCookie('token'); 
    if(token){
        authToken[1](token);
        loading[1](false); 
        
              queueList(token).then((response) => {  
                // let insidedata = response.data.data.inside;
                if(response.data.success){  
                    insidequeue[1](response.data.data.inside); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 
              queueList(token).then((response) => { 
                // let outsidedata = response.data.data.outside; 
                if(response.data.success){ 
                    outsidequeue[1](response.data.data.outside); 
                } 
              }).catch((error)=> {
                console.log(error);  
              });  
              holdList(token).then((response) => {  
                // let insideholddata = response.data.data.inside;
                if(response.data.success){  
                    insidehold[1](response.data.data.inside); 
                } 
              }).catch((error)=> {
                console.log(error);  
              });  
              holdList(token).then((response) => { 
                // let outsideholddata = response.data.data.outside; 
                if(response.data.success){ 
                    outsidehold[1](response.data.data.outside); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 
              historyList(token).then((response) => { 
                // let outsidehistorydata = response.data.data.outside; 
                if(response.data.success){ 
                    outsidehistory[1](response.data.data.outside); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 
              historyList(token).then((response) => { 
                // let insidehistorydata = response.data.data.inside;
                if(response.data.success){
                    insidehistory[1](response.data.data.inside); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 

              settingsData(token).then((response) => {  
                if(response.data.success){ 
                    settings[1](response.data.data); 
                } 
              }).catch((error)=> {
                console.log(error);  
              }); 

              countriesList(token).then((response) => {  
                if(response.data.success){ 
                  countries[1](response.data.data); 
                } 
              }).catch((error)=> {
                console.log(error);  
              });  


              seatingArea(token).then((response) => {  
                if(response.data.success){ 
                  seatingarea[1](response.data.data);    
                } 
              }).catch((error)=> {
                console.log(error);  
              });  

              // userByMobile(token).then((response) => {  
              //   if(response.data.success){ 
              //     // countries[1](response.data.data); 
              //     console.log(response.data.data);  
              //   } 
              // }).catch((error)=> {
              //   console.log(error);  
              // });  

    }else{
        authToken[1]();
        router.push('login');
        loading[1](true); 
    }
}
 

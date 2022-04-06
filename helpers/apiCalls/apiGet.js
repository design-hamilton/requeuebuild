
import axios from "../../config/instance"; 


export const statsData = async(at) => {  
    const response = await axios.get("/queue/statistics",{
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
        } 
    }); 
    return response;
}

export const queueList = async(at) => {  
    const response = await axios.get("/queue/queue",{
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
        } 
        // body:{
        //         "status": "queue"
        //     } 
    }); 
    return response;
}

export const holdList = async(at) => {  
    const response = await axios.get("/queue/hold",{
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
        } 
    }); 
    return response;
}

export const historyList = async(at) => {  
    const response = await axios.get("/queue/history",{
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
        } 
    }); 
    return response;
}


export const settingsData = async(at) => {  
    const response = await axios.get("/restaurant/settings",{
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
        } 
    }); 
    return response;
}

export const countriesList = async(at) => {  
    const response = await axios.get("/country/list",{
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
        } 
    }); 
    return response;
}

export const userByMobile = async(at,cid,phone) => {  
    const response = await axios.get("/client/get",{
        params: { "countryId": cid,"phone":phone },
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
        } 
    }); 
    return response;
}

export const seatingArea = async(at) => {  
    const response = await axios.get("/restaurant/tags",{
        headers: {
            "Content-Type": "application/json",
            "userToken": at, 
            "lang": 'english', 
        } 
    }); 
    return response;
}

import { useContext } from "react";
import axios from "../../config/instance";
import { GlobalContext } from "../../contextApi/Provider";


export const userLogin = async(userData) => { 
    const response = await axios.post("/account/login", userData, {
        headers: {
            "Content-Type": "application/json",
        }
    }); 
    return response;
}

export const addClient = async(token,custInfo) => {  
    const response = await axios.post("/client/create", custInfo, {
        headers: {
            "Content-Type": "application/json",
            "userToken": token, 
            "lang":"english"
        }
    }); 
    return response;
}

export const addQueue = async(token,QueueInfo) => {  
    const response = await axios.post("/queue/add", QueueInfo, {
        headers: {
            "Content-Type": "application/json",
            "userToken": token, 
            "lang":"english"
        }
    }); 
    return response;
}

export const holdClient = async(qid,token) => {  
    const response = await axios.post("/queue/hold", qid, {
        headers: {
            "Content-Type": "application/json",
            "userToken": token, 
        }
    }); 
    return response;
}

export const cancelClient = async(qid,token) => {  
    const response = await axios.post("/queue/cancel", qid, {
        headers: {
            "Content-Type": "application/json",
            "userToken": token, 
        }
    }); 
    return response;
} 

export const seatClient = async(qid,token) => {  
    const response = await axios.post("/queue/seat", qid, {
        headers: {
            "Content-Type": "application/json",
            "userToken": token, 
        }
    }); 
    return response;
}

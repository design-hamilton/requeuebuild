
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

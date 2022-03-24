import axios from "../../config/instance";


export const userLogin = async(userData) => { 
    const response = await axios.post("/account/login", userData, {
        headers: {
            "Content-Type": "application/json",
        }
    }); 
    return response;
}

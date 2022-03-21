import axios from "../config/axios";


export const userLogin = async(userData) => {
    const response = await axios.post("/account/login", userData, {
        headers: {
            "Content-Type": "application/json",
        }
    });


    return response;
}
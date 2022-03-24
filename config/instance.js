import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.requeue.net/host/" 
})
export default instance;
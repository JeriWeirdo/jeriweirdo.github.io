import axios from "axios";
const api = axios.create({
    baseURL: "http://192.168.12.180:3000/"
})
export default api
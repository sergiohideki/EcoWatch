import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.140:3000/api", // importante já incluir /api aqui
});

export default api;

import axios from "axios";

const api = axios.create({
    baseURL: "http://COLOQUE_SEU_IPV4_AQUI:3000/api",
});

export default api;

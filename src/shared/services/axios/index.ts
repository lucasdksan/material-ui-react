import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./tools";
import { env } from "../../environment";

const api = axios.create({
    baseURL: env.VITE_PORT
});

api.interceptors.response.use(
    (response)=> responseInterceptor(response),
    (error)=> errorInterceptor(error),
);

export { api };
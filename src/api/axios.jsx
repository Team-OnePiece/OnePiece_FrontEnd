import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_URL = "http://54.180.94.103:8080";
const cookie = new Cookies();

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = cookie.get("access_token");
    const returnConfig = {
      ...config,
    };
    if (accessToken) {
      returnConfig.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

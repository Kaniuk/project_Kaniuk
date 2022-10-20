import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
    },
});

axiosService.interceptors.request.use(
    config => {
        const accessToken = process.env.REACT_APP_TOKEN;

        if (accessToken) {
            config.headers = {Authorization: `Bearer ${accessToken}`};
        }
        return config;
    },
    error => {
        Promise.reject(error.response || error.message);
    }
);

export {
    axiosService
};
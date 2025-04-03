import axios from "axios";

const axiosHttp = axios.create({baseURL: "https://puneri-paltan-backend-apis.up.railway.app/api/v1"});

axiosHttp.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const axiosTryCatch = axios.create({baseURL: "https://appy.trycatchtech.com/v3/puneri_paltan"});

axiosTryCatch.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export {axiosHttp, axiosTryCatch};
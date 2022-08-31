import axios from "axios";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api`,
    withCredentials: false,
    headers: {
        "Content-type": "application/json"
    }
});

apiClient.interceptors.request.use(config => {
    const access_token = sessionStorage.getItem('access_token');
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
})

export default apiClient;


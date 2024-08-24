// import axios from 'axios';
// import { getToken } from '../src/auth/authService';

// const api = axios.create({
//     baseURL: 'http://localhost:8080/api/admin',
//     headers: {
//         Authorization: `Bearer ${getToken()}`
//     }
// });

// export default api;



import axios from 'axios';
import KeyCloakService from '../src/security/KeycloakService';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

apiClient.interceptors.request.use((config) => {
    const token = KeyCloakService.GetAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;

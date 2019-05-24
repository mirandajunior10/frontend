import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jorlan-backend.herokuapp.com'
});

export default api;
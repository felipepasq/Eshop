import axios from "axios";

const api = axios.create({
    baseURL: 'https://reactnative.dev/movies.json',
});

export default api;
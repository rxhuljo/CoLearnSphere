import axios from "axios";

const API_URL = "http://localhost:5000";

export const registerUser = (username, password , email, college, phone) => {
    return axios.post(`${API_URL}/register`, { username, password ,email,college,phone}, { withCredentials: true });
};

export const loginUser = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
};

export const getcomm = () => {
    return axios.post(`${API_URL}/community`,{} , {withCredentials: true})
};
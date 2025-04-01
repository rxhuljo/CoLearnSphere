import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const registerUser = (username, password, email, college, phone) => {
    return axios.post(`${API_URL}/register`, { username, password, email, college, phone }, { withCredentials: true });
};

export const loginUser = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
};

export const getCommunity = () => {
    return axios.post(`${API_URL}/community`, {}, { withCredentials: true });
};

export const addCommunityPost = (username, content) => {
    return axios.post(`${API_URL}/addcom`, { username, content }, { withCredentials: true });
};

export const getModules = () => {
    return axios.post(`${API_URL}/modules`, {}, { withCredentials: true });
};

export const addModule = (modulename, desc) => {
    return axios.post(`${API_URL}/addmodules`, { modulename, desc }, { withCredentials: true });
};

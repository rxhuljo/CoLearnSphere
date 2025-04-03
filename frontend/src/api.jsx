import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const registerUser = async (username, password, email, college, phone) => {
    return axios.post(`${API_URL}/register`, { username, password, email, college, phone }, { withCredentials: true });
};

export const loginUser = async (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
};

export const getCommunity = async () => {
    return axios.get(`${API_URL}/community`, { withCredentials: true });  // Fixed: Use GET
};

export const addCommunityPost = async (userId, content) => {
    return axios.post(`${API_URL}/addcom`, { userId, content }, { withCredentials: true });
};

export const getModules = async (userId) => {
    return axios.get(`${API_URL}/modules`, {
        params: { userId }, 
        withCredentials: true,
    });
};

export const addModule = async (userid, sessionName, location, description) => {
    return axios.post(`${API_URL}/addmodules`, { userid, sessionName, location, description }, { withCredentials: true });
};

export const joinModule = async (userId , modId) => {
    return axios.get(`${API_URL}/joinmodules`, {
        params: { userId , modId}, 
        withCredentials: true,
    });
};
export const getJoinedModules = async (userId) => {
    return axios.get(`${API_URL}/joinedmodules`, {
        params: { userId}, 
        withCredentials: true,
    });
};

export const getJoinedSession = async (userId) => {
    return axios.get(`${API_URL}/joinedsessions`, {
        params: { userId}, 
        withCredentials: true,
    });
};

export const getUserDetails = async (userId) => {
    return axios.get(`${API_URL}/userdetails`,{
        params:{userId},
        withCredentials :true
    })
}
import axios from "axios";

const API_URL = "http://127.0.0.1:5000"; // Ensure this matches your Flask backend

const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

// User Authentication
export const registerUser = (username, password, email, college, phone) => 
    api.post("/register", { username, password, email, college, phone });

export const loginUser = (email, password) => 
    api.post("/login", { email, password });

// Community APIs
export const getCommunity = () => 
    api.get("/community");

export const addCommunityPost = (userId, content) => 
    api.post("/addcom", { userId, content });

// Modules (Sessions)
export const getModules = (userId) => 
    api.get("/modules", { params: { userId } });

export const addModule = (userId, sessionName, location, description) => 
    api.post("/addmodules", { userId, sessionName, location, description });

export const joinModule = (userId, modId) => 
    api.get("/joinmodules", { params: { userId, modId } });

export const getJoinedModules = (userId) => 
    api.get("/joinedmodules", { params: { userId } });

export const getJoinedSession = (userId) => 
    api.get("/joinedsessions", { params: { userId } });

// User Details
export const getUserDetails = (userId) => 
    api.get("/userdetails", { params: { userId } });

// Semester Data
export const getSemesterData = async (userId) => {
    try {
        const response = await api.get(`/get-semester-data/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch semester data");
    }
};

export const saveSemesterData = async (userId, data) => {
    try {
        const response = await api.post(`/save-semester-data/${userId}`, data);
        return response.data;
    } catch (error) {
        throw new Error("Failed to save semester data");
    }
};

// Chat APIs
export const getMessages = (moduleId) => 
    api.get(`/messages/${moduleId}`);

export const sendMessage = (messageData) => 
    api.post("/messages", messageData);

// Resources APIs
export const getResources = (moduleId) => 
    api.get(`/resources/${moduleId}`);

export const addResource = (resourceData) => 
    api.post("/resources", resourceData);

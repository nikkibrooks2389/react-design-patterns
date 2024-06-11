import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = (url, config = {}) => {
    return apiClient.get(url, config);
};

export const post = (url, data, config = {}) => {
    return apiClient.post(url, data, config);
};

// Other HTTP methods like put, delete, etc. can be added similarly

//-----------------------------------------------------------------------------------------------------------------------------------

import { get, post } from './api';

export const fetchUser = (userId) => {
    return get(`/users/${userId}`);
};

export const createUser = (userData) => {
    return post('/users', userData);
};

// Additional user-related functions can be added here

//-----------------------------------------------------------------------------------------------------------------------------------

import { post } from './api';

export const login = (credentials) => {
    return post('/auth/login', credentials);
};

export const logout = () => {
    // Logic to handle logout, e.g., clearing tokens
};

export const getCurrentUser = () => {
    // Logic to get the current authenticated user
};

// Additional authentication-related functions can be added here

//-----------------------------------------------------------------------------------------------------------------------------------
export const transformData = (data) => {
    // Logic to transform data
    return data.map(item => ({
        ...item,
        transformedProperty: item.property.toUpperCase(),
    }));
};

// Additional data manipulation functions can be added here
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { environment } from '../config/env.config';
import { AUTH_TOKEN, TOKEN_PAYLOAD_KEY } from '../constants/AuthConstant';

// Initialize Axios instance
const axiosInstance = axios.create({
  baseURL: environment.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(AUTH_TOKEN); // Replace with your preferred storage method
    if (token) {
      config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can manipulate the response here if needed
    return response;
  },
  error => {
    // Handle errors globally
    if (axios.isAxiosError(error)) {
      // If the error response is 401 (Unauthorized), clear the token
      if (error.response?.status === 401) {
        localStorage.removeItem(AUTH_TOKEN); // Remove invalid token
        // Optionally, redirect the user to the login page
      }
      return Promise.reject(error.response?.data || 'An error occurred.');
    } else {
      return Promise.reject('An unexpected error occurred.');
    }
  },
);

export default axiosInstance;

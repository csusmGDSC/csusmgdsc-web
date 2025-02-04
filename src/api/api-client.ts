import { API_ROUTES } from "@/config/api-routes";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// Request interceptor to add Authorization Bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor to handle token re-validation
let refreshCount = 0;
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      if (refreshCount > 2) {
        // If we've sent the refresh request more than 2 times,
        // it's probably stuck in an infinite loop, so we reject
        refreshCount = 0; // Reset the counter for the next attempted api request (not refresh request)
        return Promise.reject(error);
      }

      try {
        // Attempt to refresh the access token
        await axios.patch(
          `${import.meta.env.VITE_BACKEND_URL}${API_ROUTES.AUTH.REFRESH}`,
          {},
          { withCredentials: true }
        );

        // Retry the original request
        return api(error.config);
      } catch (refreshError) {
        refreshCount += 1;
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

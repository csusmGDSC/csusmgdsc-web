import { API_ROUTES } from "@/config/api-routes";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// Interceptor to handle token re-validation
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        // Attempt to refresh the access token
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}${API_ROUTES.AUTH.REFRESH}`,
          {},
          { withCredentials: true }
        );

        // Retry the original request
        return api(error.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

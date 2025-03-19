import { API_ROUTES } from "@/config/api-routes";
import axios from "axios";
import { saveAccessTokenToLocalStorage } from "./user.localstore";
import { toast } from "sonner";

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

      console.log(
        "TRYING TO REFRESH TOKEN USING URL: ",
        `${import.meta.env.VITE_BACKEND_URL}${API_ROUTES.AUTH.REFRESH}`
      );

      try {
        // Attempt to refresh the access token
        const refreshResponse = await axios.patch(
          `${import.meta.env.VITE_BACKEND_URL}${API_ROUTES.AUTH.REFRESH}`,
          {},
          { withCredentials: true }
        );

        // Save the new access token
        const newAccessToken = refreshResponse.data.accessToken;
        if (newAccessToken) {
          saveAccessTokenToLocalStorage(newAccessToken);
        } else {
          console.error("No new access token received from refresh.");
          return Promise.reject(error);
        }

        // Retry the original request with updated token
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request
        // return api(error.config);
      } catch (refreshError) {
        refreshCount += 1;
        return Promise.reject(refreshError);
      }
    }

    // **Handle Rate Limiting (429)**
    if (error.response?.status === 429) {
      const retryAfter = error.response.headers["retry-after"];

      const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : 2000; // Use server delay if available, else default 2s

      toast.error("You are making too many requests. Please try again later.");

      return new Promise((resolve) =>
        setTimeout(() => resolve(api(error.config)), delay)
      );
    }

    return Promise.reject(error);
  }
);

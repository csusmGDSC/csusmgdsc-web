/**
 * All backend api routes used by the application, this is the only place where they are defined.
 *
 * We follow the SSOT (single-source-of-truth) pattern, see [here](https://www.mulesoft.com/resources/esb/what-is-single-source-of-truth-ssot)
 * for more information.
 *
 * @example
 * import axios from "axios";
 *
 * const api = axios.create({
 *   baseURL: import.meta.env.VITE_BACKEND_URL,
 *   withCredentials: true,
 * });
 *
 * api.get(API_ROUTES.AUTH.LOGIN);
 * api.get(API_ROUTES.EVENTS.GET_EVENTS({ page: 1, limit: 10 }));
 */
export const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    GOOGLE_LOGIN: "/auth/google/login",
    GITHUB_LOGIN: "/auth/github/login",
    DELETE_USER: "/auth/delete",
    UPDATE_USER: "/auth/update",
    GET_CURRENT_USER: "/auth/me",
  },
  EVENTS: {
    GET_EVENTS: (params?: Record<string, string | number>) =>
      `/events${params ? formatQueryParams(params) : ""}`,
    GET_EVENT_BY_ID: (id: string) => `/events/${id}`,
  },
  PROJECTS: {},
  TEAMS: {},
  USERS: {
    GET_USERS: (params?: Record<string, string | number>) =>
      `/users${params ? formatQueryParams(params) : ""}`,
    GET_USER_BY_ID: (id: string) => `/users/${id}`,
  },
};

/**
 * Utility function to format query parameters.
 */
function formatQueryParams(params: Record<string, string | number>): string {
  const queryString = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  return queryString ? `?${queryString}` : "";
}

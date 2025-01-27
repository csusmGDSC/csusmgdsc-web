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
    UPDATE_USER: "auth//update",
  },
  EVENTS: {
    GET_EVENTS: "/events",
  },
  PROJECTS: {},
  TEAMS: {},
  USERS: {},
};

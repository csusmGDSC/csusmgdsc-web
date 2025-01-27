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
    LOGIN: "/login",
    SIGNUP: "/signup",
    LOGOUT: "/logout",
    RESETPASSWORD: "/reset-password",
    VERIFYEMAIL: "/verify-email",
    GETUSER: "/getuser",
    REFRESH: "/refresh",
    UPDATE_USER: "/update",
  },
  EVENTS: {},
  PROJECTS: {},
  TEAMS: {},
  USERS: {},
};

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
    CREATE_EVENT: "/admin/events",
    DELETE_EVENT_BY_EVENT_ID: (id: string) => `/admin/events/${id}`,
    UPDATE_EVENT_BY_EVENT_ID: (id: string) => `/admin/events/${id}`,
    ADD_EVENT_ORGANIZER_BY_EVENT_ID: (eventId: string, userId: string) =>
      `/admin/events/${eventId}/organizers/${userId}`,
    GET_EVENT_ORGANIZERS_BY_EVENT_ID: (eventId: string) =>
      `/events/${eventId}/organizers`,
  },
  PROJECTS: {},
  TEAMS: {},
  USERS: {
    GET_USERS: (params?: Record<string, string | number>) =>
      `/users${params ? formatQueryParams(params) : ""}`,
    GET_USER_BY_ID: (id: string) => `/users/${id}`,
  },
  COMMENTS: {
    GET_COMMENTS_BY_EVENT_ID: (id: string) => `/comments?event_id=${id}`,
    GET_COMMENT_BY_USER_ID: (id: string) => `/comments?user_id=${id}`,
    GET_COMMENTS_BY_USER_AND_EVENT_ID: (userId: string, eventId: string) =>
      `/comments?user_id=${userId}&event_id=${eventId}`,
    CREATE_COMMENT: "/comments",
    GET_COMMENT_BY_COMMENT_ID: (id: string) => `/comments/${id}`,
    UPDATE_COMMENT_BY_COMMENT_ID: (id: string) => `/comments/${id}`,
    DELETE_COMMENT_BY_COMMENT_ID: (id: string) => `/comments/${id}`,
  },
  UTILS: {
    UPLOAD_IMAGE: "/admin/utils/image",
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

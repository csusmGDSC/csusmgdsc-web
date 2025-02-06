/**
 * All page routes for the application, this is the only place where they are defined.
 *
 * We follow the SSOT (single-source-of-truth) pattern, see [here](https://www.mulesoft.com/resources/esb/what-is-single-source-of-truth-ssot)
 * for more information.
 *
 * @example
 * import { useNavigate } from "react-router-dom";
 * const navigate = useNavigate();
 * navigate(PAGE_ROUTES.AUTH.SIGN_IN);
 */
export const PAGE_ROUTES = {
  AUTH: {
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    EMAIL_VERIFICATION: "/auth/email-verification",
    TWO_FACTOR_AUTH: "/auth/two-factor-auth",
    ONBOARDING: "/auth/onboarding",
  },
  BASE: {
    HOME: "/",
    EVENTS: "/events",
    PROJECTS: "/projects",
    RESOURCES: "/resources",
    EVENT_PAGE: "/events/:eventId",
    JOIN: "/join",
    TEAM: "/team",
    PROFILE: "/profile/:userId",
  },
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    EVENTS: "/admin/events",
    USERS: "/admin/users",
  },
};

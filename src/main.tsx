import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PageLayout, PageAdminLayout } from "./features/base";
import HomePage from "./pages/home-page";
import EventsPage from "./pages/events-page";
import ProjectsPage from "./pages/projects-page";
import ResourcesPage from "./pages/resources-page";
import EventPage from "./pages/event-page";
import InfoPage from "./pages/info-page";
import TeamPage from "./pages/team-page";
import ProfilePage from "./pages/profile-page";
import SignInPage from "./pages/sign-in-page";
import { Toaster } from "./components/ui/sonner";
import SignUpPage from "./pages/sign-up-page";
import OnboardingPage from "./pages/onboarding-page";
import ResetPage from "./pages/forgot-password-page";
import ResetPasswordPage from "./pages/reset-password-page";
import EmailVerificationPage from "./pages/email-verification-page";
import TwoFactorAuthPage from "./pages/two-factor-auth-page";
import DashboardPage from "./pages/dashboard-page";
import NotFoundPage from "./pages/not-found-page";
import AdminEventsPage from "./pages/admin-events-page";
import AdminUsersPage from "./pages/admin-users-page";
import SettingsPage from "./pages/settings-page";
import { ThemeProvider } from "./lib/providers";
import { AdminEventCreationPage } from "./pages/admin-event-creation-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/resources",
        element: <ResourcesPage />,
      },
      {
        path: "/events/:eventId",
        element: <EventPage />,
      },
      {
        path: "/join",
        element: <InfoPage />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/profile/:userId",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ResetPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "email-verification",
        element: <EmailVerificationPage />,
      },
      {
        path: "two-factor-auth",
        element: <TwoFactorAuthPage />,
      },
      {
        path: "onboarding",
        element: <OnboardingPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <PageAdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "events",
        element: <AdminEventsPage />,
      },
      {
        path: "users",
        element: <AdminUsersPage />,
      },
      {
        path: "create-event",
        element: <AdminEventCreationPage />,
      },
    ],
  },
]);

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PageLayout } from "./features/base";
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
        path: "/onboarding",
        element: <OnboardingPage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);

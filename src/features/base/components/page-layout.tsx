import { Navigate, Outlet } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";
import { useUser } from "@/api/auth-api";

export default function PageLayout() {
  const user = useUser();

  if (user && !user?.is_onboarded) {
    return <Navigate to="/auth/onboarding" />;
  }

  return (
    <main className="min-h-screen bg-background flex flex-col font-sans antialiased">
      <div className="flex-1">
        <Header />
        <div className="mt-[4.5rem]">
          <Outlet />
        </div>
      </div>

      <Footer />
    </main>
  );
}

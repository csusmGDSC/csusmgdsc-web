import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";

export default function PageLayout() {
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

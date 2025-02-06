// import { Announcement } from "@/components/ui/announcement";
// import { Button } from "@/components/ui/button";
import { PageContent } from "@/features/base";
import {
  ActivityGallery,
  Branches,
  Hero,
  About,
  ApplyNow,
  Benefits,
  Socials,
  NavBar,
} from "@/features/home";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <div>
        {/* <Announcement color="blue">
          <p className="text-sm font-medium text-primary">
            GDSC-CSUSM is accepting 2025 applications.
          </p>
          <Link to="/join" className="py-0">
            <Button variant="link" size="sm" className="py-0">
              Join Today
            </Button>
          </Link>
        </Announcement> */}

        <Hero />
      </div>

      <PageContent className="gap-28 relative">
        <NavBar />
        <About />
        <Branches />
        <Benefits />
        <ActivityGallery />
        <Socials />
      </PageContent>

      <ApplyNow />
    </main>
  );
}

import { Announcement } from "@/components/ui/announcement";
import { Button } from "@/components/ui/button";
import { PageContent } from "@/features/base";
import { ActivityGallery, Branches, Hero, About } from "@/features/home";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <Announcement color="blue">
        <p className="text-sm font-medium text-primary">
          GDSC-CSUSM is accepting 2025 applications.
        </p>
        <Link to="/join" className="py-0">
          <Button variant="link" size="sm" className="py-0">
            Join Today
          </Button>
        </Link>
      </Announcement>
      <Hero />

      <PageContent>
        <About />
        <Branches />
        <ActivityGallery />
      </PageContent>
    </main>
  );
}

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
import { Metrics } from "@/features/home/components/metrics";
import { Testimonials } from "@/features/home/components/testimonials";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />

      <PageContent className="gap-28 relative">
        <NavBar />
        <About />
        <Branches />
        <Benefits />
        <Metrics />
        <ActivityGallery />
        <Testimonials />
        <Socials />
      </PageContent>

      <ApplyNow />
    </main>
  );
}

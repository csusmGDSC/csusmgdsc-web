import { PageContent } from "@/features/base";
import { ActivityGallery, Branches, Hero, About } from "@/features/home";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <PageContent>
        <About />
        <Branches />
        <ActivityGallery />
      </PageContent>
    </main>
  );
}

import { PageContent } from "@/features/base";
import { ActivityGallery, Branches, Hero } from "@/features/home";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <PageContent>
        <Branches />
        <ActivityGallery />
      </PageContent>
    </main>
  );
}

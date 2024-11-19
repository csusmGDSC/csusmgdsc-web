import { PageContent, PageHeader } from "@/features/base";
import { FAQ } from "@/features/resources";

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Resources"
        subTitle="Additional resources, information, and guidelines."
        backgroundImageSrc="./src/assets/images/placeholder/homeBackground-4.jpg"
      />
      <PageContent>
        <FAQ />
      </PageContent>
    </main>
  );
}

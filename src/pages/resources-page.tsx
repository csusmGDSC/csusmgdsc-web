import { PageContent, PageHeader } from "@/features/base";
import { ResourceCards } from "@/features/resources";
import { FAQ } from "@/features/resources";

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Resources"
        subTitle="Additional resources, information, and guidelines."
        backgroundImageSrc="/images/placeholder/homeBackground-4.jpg"
      />
      <PageContent>
        <ResourceCards />
        <FAQ />
      </PageContent>
    </main>
  );
}

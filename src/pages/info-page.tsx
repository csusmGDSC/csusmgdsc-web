import { PageContent, PageHeader } from "@/features/base";
import { Benefits, InfoCards } from "@/features/info";

export default function InfoPage() {
  return (
    <main>
      <PageHeader
        title="Get Involved"
        subTitle="Join a community of passionate students building the future of
            technology. Whether you're a beginner or an expert, there's a place
            for you here."
        backgroundImageSrc="/images/placeholder/homeBackground-3.jpg"
      />
      <PageContent>
        <Benefits />
        <InfoCards />
      </PageContent>
    </main>
  );
}

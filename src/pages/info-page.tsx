import { PageContent, PageHeader } from "@/features/base";
import { SectionTitle } from "@/features/base";
import { Benefits, InfoCards } from "@/features/info";

// Theme management
import { useTheme } from "@/lib/providers";

export default function InfoPage() {
  const ReactComponent = () => {
    const { theme } = useTheme();

    return (
      <main>
        <PageHeader
          title="Get Involved"
          subTitle="Join a community of passionate students building the future of
            technology. Whether you're a beginner or an expert, there's a place
            for you here."
          backgroundImageSrc="/images/placeholder/homeBackground-3.jpg"
        />
        <PageContent className="gap-32 mt-10">
          <Benefits />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionTitle
                title="Follow these steps"
                subtitle="Become the next leader in software development"
              />

              <p className="text-muted-foreground mt-6">
                We focus on a more realistic and practical application process.
                We believe those that succeed take initiative and commitment to
                their learning process.
              </p>

              <img
                src={
                  theme == "light"
                    ? "/images/stock/stock-4.jpeg"
                    : "/images/stock/stock-4-dark.jpeg"
                }
                alt="stock-4"
                className="hidden lg:block"
              />
            </div>

            <InfoCards />
          </div>
        </PageContent>
      </main>
    );
  };
}

import { PageContent, PageHeader, SectionTitle } from "@/features/base";
import BrandColors from "../features/brand/components/brand-colors";
import LogoInfo from "@/features/brand/components/logo-info";

export default function BrandPage() {
  return (
    <>
      <main>
        <PageHeader
          title="Brand"
          subTitle="Additional resources, information, and guidelines."
          backgroundImageSrc="/images/placeholder/homeBackground-4.jpg"
        />
        <PageContent>
          <SectionTitle
            title="Colors"
            subtitle="These are the official GDSC Colors."
          />
          <BrandColors></BrandColors>
          <SectionTitle title="Logo and Info" subtitle="Access our logo and Google's brand guidelines." />
          <LogoInfo></LogoInfo>
        </PageContent>
      </main>
    </>
  );
}



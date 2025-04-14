import { projects } from "@/config/data";
import { PageContent, PageHeader } from "@/features/base";
import {
  ProjectContributions,
  ProjectList,
  ProjectRequirements,
} from "@/features/projects";
import { ProjectBackend } from "@/features/projects/components/project-backend";
import { ProjectFrontend } from "@/features/projects/components/project-frontend";
import { ProjectTechMarquee } from "@/features/projects/components/project-tech-marquee";
import { ProjectTools } from "@/features/projects/components/project-tools";

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        title="Projects"
        subTitle="Check out our open-source projects!"
        backgroundImageSrc="/images/placeholder/homeBackground-2.jpg"
      />
      <PageContent className="gap-0 space-y-20 ">
        <ProjectContributions />
        <ProjectList projects={projects} />

        <section className="space-y-20">
          <ProjectTechMarquee />
          <ProjectFrontend />
          <ProjectBackend />
          <ProjectTools />
          <ProjectRequirements />
        </section>
      </PageContent>
    </main>
  );
}

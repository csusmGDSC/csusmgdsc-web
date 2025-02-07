import CardGrid from "@/components/ui/card-grid";
import { GDSCProject } from "@/types/gdsc-project";
import ProjectCard from "./project-card";
import { SectionTitle } from "@/features/base";

interface ProjectListProps {
  projects: GDSCProject[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section className="space-y-2">
      <SectionTitle
        title="Projects"
        subtitle="See our list of technical works"
      />
      <CardGrid placeholder="There is currently no projects at the moment.">
        {projects.map((e) => (
          <div className="sm:!w-[calc(50%-1rem)] lg:!w-[calc(33.333%-1rem)]">
            <ProjectCard
              title={e.title}
              description={e.description}
              websiteUrl={e.websiteUrl}
              githubUrl={e.githubUrl}
              imageSrc={e.imageSrc}
              tags={e.tags}
              date={e.date}
            />
          </div>
        ))}
      </CardGrid>
    </section>
  );
};

export default ProjectList;

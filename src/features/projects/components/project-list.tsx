import CardGrid from "@/components/ui/card-grid";
import Title from "@/components/ui/title";
import { GDSCProject } from "@/types/gdsc-project";
import ProjectCard from "./project-card";

interface ProjectListProps {
  projects: GDSCProject[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section>
      <Title>Projects</Title>
      <CardGrid placeholder="There is currently no projects at the moment.">
        {projects.map((e) => (
          <>
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
          </>
        ))}
      </CardGrid>
    </section>
  );
};

export default ProjectList;

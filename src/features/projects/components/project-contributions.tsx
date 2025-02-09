import { SectionTitle } from "@/features/base";

const projectsOverview =
  "Joining GDSC-CSUSM will allow you to partake in various community projects, where you can learn a variety of technical skills that you can apply on your resume. Both members individual projects, as well as the club projects are listed here that exist at GDSC-CSUSM.";

const ProjectContributions = () => {
  return (
    <section className="space-y-2">
      <SectionTitle
        title="Contributions"
        subtitle="See how you can apply your skillset"
      />
      <p className="text-sm px-2 md:px-0 w-full text-left">
        {projectsOverview}
      </p>
    </section>
  );
};

export default ProjectContributions;

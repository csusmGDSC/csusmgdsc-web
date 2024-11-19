import Title from "@/components/ui/title";

const projectsOverview =
  "Joining GDSC-CSUSM will allow you to partake in various community projects, where you can learn a variety of technical skills that you can apply on your resume. Both members individual projects, as well as the club projects are listed here that exist at GDSC-CSUSM.";

const ProjectContributions = () => {
  return (
    <section>
      <Title>Contributions</Title>
      <p className="text-sm px-2 md:px-0 w-full text-left">
        {projectsOverview}
      </p>
    </section>
  );
};

export default ProjectContributions;

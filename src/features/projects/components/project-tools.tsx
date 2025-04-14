import { Separator } from "@/components/ui/separator";
import { ProjectWorkflows } from "./project-databases";

export const ProjectTools = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="space-y-4 md:w-1/2">
        <div>
          <h1 className="text-lg font-bold">Tools & Databases</h1>
          <p className="text-blue">
            Industry-standard tooling and infrastructure
          </p>
        </div>

        <Separator />

        <ul className="[&>li]:list-disc [&>li]:ml-4 space-y-4">
          <li>PostgreSQL with Row-Level Security (RLS)</li>
          <li>AWS services such as S3, EC2, and CloudFront</li>
          <li>Github with automated CI/CD workflows and code review</li>
        </ul>
      </div>

      <ProjectWorkflows />
    </div>
  );
};

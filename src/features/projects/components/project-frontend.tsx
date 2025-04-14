import { Separator } from "@/components/ui/separator";
import { ProjectFrontendSkeleton } from "./project-frontend-skeleton";

export const ProjectFrontend = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="space-y-4 md:w-1/2">
        <div>
          <h1 className="text-lg font-bold">Frontend</h1>
          <p className="text-blue">
            Modern web development with industry-standard tools
          </p>
        </div>

        <Separator />

        <ul className="[&>li]:list-disc [&>li]:ml-4 space-y-4">
          <li>Build websites with TypeScript, React, Vite, and TailwindCSS</li>
          <li>Fetch data with cache-first using TanStack Query</li>
          <li>Build type-safe forms using React-Hook-Form and Zod</li>
        </ul>
      </div>

      <ProjectFrontendSkeleton />
    </div>
  );
};

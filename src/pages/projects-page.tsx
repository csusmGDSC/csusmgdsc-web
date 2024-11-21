import { PageContent, PageHeader } from "@/features/base";
import {
  ProjectContributions,
  ProjectList,
  ProjectRequirements,
} from "@/features/projects";
import { GDSCProject } from "@/types/gdsc-project";

const exampleProjects: GDSCProject[] = [
  {
    title: "NASA JPL Rover",
    description:
      "Mechanical assembly of rover sourced from the NASA JPL website. Used to build foundational skills for URC rover challenge.",
    websiteUrl: "https://github.com/nasa-jpl/open-source-rover",
    githubUrl: "https://github.com/nasa-jpl/open-source-rover",
    imageSrc: "/images/projects/rover.jpg",
    tags: ["ROS2", "Python", "C++"],
    date: "Sep 2024 - Present",
  },
  {
    title: "Routify",
    description:
      "City pathfinding visualizer. Used to learn fundamental graph traversal algorithms such as BFS, DFS, or A* Search.",
    websiteUrl: "https://www.routify.cc",
    githubUrl: "https://www.github.com/jaedonspurlock01/routify",
    imageSrc: "/images/projects/routify.gif",
    tags: ["JavaScript", "ReactJS", "ThreeJS"],
    date: "Jan 2024 - Mar 2024",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        title="Projects"
        subTitle="Check out our open-source projects!"
        backgroundImageSrc="/images/placeholder/homeBackground-2.jpg"
      />
      <PageContent>
        <ProjectContributions />
        <ProjectRequirements />
        <ProjectList projects={exampleProjects} />
      </PageContent>
    </main>
  );
}

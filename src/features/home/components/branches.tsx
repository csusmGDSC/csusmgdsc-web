import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Users,
  Cloud,
  Terminal,
  BookOpen,
  GitBranch,
} from "lucide-react";
import { SectionTitle } from "./section-title";
import RandomBadge from "@/components/ui/random-badge";

const teams = [
  {
    title: "Project",
    description:
      "Collaborate on a variety of software applications and business solutions",
    features: [
      {
        icon: <Code className="w-5 h-5" />,
        text: "Contribute in coding projects",
      },
      {
        icon: <GitBranch className="w-5 h-5" />,
        text: "Learn industry workflows",
      },
      { icon: <Cloud className="w-5 h-5" />, text: "Deploy real software" },
    ],
    technologies: ["HTML", "CSS", "TypeScript", "React", "GoLang", "GitHub"],
  },
  {
    title: "Interview",
    description:
      "Improve your technical skills to propel your chances of winning interviews",
    features: [
      { icon: <Users className="w-5 h-5" />, text: "Perform Mock Interviews" },
      {
        icon: <Terminal className="w-5 h-5" />,
        text: "Partake in Coding Competitions",
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        text: "Learn Interview Problems",
      },
    ],
    technologies: ["Python", "Leetcode", "C++", "HackerRank"],
  },
  {
    title: "Marketing",
    description: "Help grow the community by marketing and promoting GDSC",
    features: [
      {
        icon: <Users className="w-5 h-5" />,
        text: "Create social media content strategy",
      },
      {
        icon: <Terminal className="w-5 h-5" />,
        text: "Develop campus outreach programs",
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        text: "Organize networking events",
      },
    ],
    technologies: [
      "Analytics",
      "Email Marketing",
      "Social Media",
      "Networking",
    ],
  },
];
export default function Branches() {
  return (
    <div className="w-full space-y-4">
      <SectionTitle
        title="Branches"
        subtitle="We are split into three disciplines"
      />

      <div className="flex flex-col lg:flex-row gap-6 w-full justify-center">
        {teams.map((team, index) => (
          <Card
            key={index}
            className="flex-1 group hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                {team.title}
              </CardTitle>
              <CardDescription className="text-primary/70">
                {team.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  {team.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-primary/80"
                    >
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {team.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-primary/80 mb-3">
                      Skills used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {team.technologies.map((tech, idx) => (
                        <RandomBadge
                          text={tech}
                          key={idx}
                          className="p-1 text-xs rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

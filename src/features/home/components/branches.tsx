import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Code,
  Users,
  Cloud,
  Play,
  Terminal,
  BookOpen,
} from "lucide-react";

const teams = [
  {
    title: "Project Team",
    description:
      "Collaborate on a variety of software applications and business solutions",
    features: [
      {
        icon: <Code className="w-5 h-5" />,
        text: "Contribute in Coding Projects",
      },
      { icon: <Play className="w-5 h-5" />, text: "Collaborate on Sprints" },
      { icon: <Cloud className="w-5 h-5" />, text: "Deploy Real Software" },
    ],
    technologies: ["HTML5", "CSS3", "TypeScript", "React", "Next.js", "GitHub"],
    techIcons: [
      <div key="html" className="bg-orange-500 p-2 rounded-lg">
        <Code className="w-4 h-4 text-white" />
      </div>,
      <div key="css" className="bg-blue p-2 rounded-lg">
        <Code className="w-4 h-4 text-white" />
      </div>,
      <div key="ts" className="bg-blue p-2 rounded-lg">
        <Terminal className="w-4 h-4 text-white" />
      </div>,
      <div key="react" className="bg-cyan-500 p-2 rounded-lg">
        <Code className="w-4 h-4 text-white" />
      </div>,
      <div key="next" className="bg-black p-2 rounded-lg">
        <Terminal className="w-4 h-4 text-white" />
      </div>,
      <div key="github" className="bg-gray-800 p-2 rounded-lg">
        <Github className="w-4 h-4 text-white" />
      </div>,
    ],
    action: "View Projects",
  },
  {
    title: "Interview Team",
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
    technologies: ["Python", "Go", "GitHub", "HackerRank"],
    techIcons: [
      <div key="python" className="bg-blue p-2 rounded-lg">
        <Terminal className="w-4 h-4 text-white" />
      </div>,
      <div key="go" className="bg-cyan-600 p-2 rounded-lg">
        <Code className="w-4 h-4 text-white" />
      </div>,
      <div key="github" className="bg-gray-800 p-2 rounded-lg">
        <Github className="w-4 h-4 text-white" />
      </div>,
      <div key="hackerrank" className="bg-green p-2 rounded-lg">
        <Terminal className="w-4 h-4 text-white" />
      </div>,
    ],
    action: "View Interview",
  },
];
export default function Branches() {
  return (
    <div className="w-full">
      <div className=" mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Branches</h1>
        <p className="text-xl text-gray-600">
          Choose your desired team at GDSC
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
        {teams.map((team, index) => (
          <Card
            key={index}
            className="flex-1 group hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                {team.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {team.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  {team.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Technologies You'll Learn
                  </h4>
                  <div className="flex flex-wrap gap-3">{team.techIcons}</div>
                </div>

                <Button className="w-full" size="lg">
                  {team.action}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

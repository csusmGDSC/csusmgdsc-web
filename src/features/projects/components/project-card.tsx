import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { GDSCProject } from "@/types/gdsc-project";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({
  title,
  description,
  websiteUrl,
  githubUrl,
  imageSrc,
  tags,
  date,
}: GDSCProject) => {
  return (
    <Card key={date} className="overflow-hidden flex flex-col w-full shadow-md">
      {/* Project Image */}
      <div className="relative group overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 text-white" />
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      <CardContent className="space-y-4 mt-8 flex-grow flex flex-col">
        <div className="flex flex-col justify-between">
          <CardTitle className="text-xl font-bold text-gray-800">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Description */}
        <CardDescription className="text-gray-600 flex-grow line-clamp-3">
          {description}
        </CardDescription>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        {/* <div className="flex flex-col gap-3 pt-4">
          {websiteUrl && (
            <a
              href={websiteUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue/80 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={githubUrl}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
            <FaGithub className="w-4 h-4" />
          </a>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

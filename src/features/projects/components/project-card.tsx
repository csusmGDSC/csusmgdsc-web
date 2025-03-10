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

const ProjectCard = (props: GDSCProject) => {
  const { title, description, tags, date } = props;

  return (
    <Card
      key={date}
      className="overflow-hidden flex flex-col w-full hover:shadow-md transition-shadow"
    >
      <ProjectCardImage {...props} />

      <CardContent className="space-y-4 mt-8 flex-grow flex flex-col">
        <div className="flex flex-col justify-between">
          <CardTitle className="text-xl font-bold text-primary">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        <CardDescription className="text-primary/70 flex-grow line-clamp-3">
          {description}
        </CardDescription>

        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="secondary"
              className="dark:bg-primary-foreground bg-gray-100 text-primary/70 hover:bg-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

const ProjectCardImage = (props: GDSCProject) => {
  const { imageSrc, title, githubUrl, websiteUrl } = props;

  return (
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
  );
};

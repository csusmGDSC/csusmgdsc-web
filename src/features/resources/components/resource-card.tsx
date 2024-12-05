import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const ResourceCard = ({
  title,
  subtitle,
  href,
  imageSrc,
}: {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
}) => {
  return (
    <Link to={href}>
      <Card className="overflow-hidden flex flex-col w-full hover:shadow-md transition-shadow">
        <div className="relative group overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardContent className="flex flex-col gap-4 mt-4">
          <CardTitle className="text-xl font-bold text-primary">
            {title}
          </CardTitle>
          <CardDescription className="text-primary/80">
            {subtitle}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ResourceCard;

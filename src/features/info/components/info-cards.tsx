import { Users, Calendar, LogIn } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Reusable Card Component
const InfoCard = ({
  icon: Icon,
  title,
  description,
  points,
  buttonText,
  buttonIcon: ButtonIcon,
  buttonLink,
  targetBlank,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  points: string[];
  buttonText: string;
  buttonIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  buttonLink: string;
  targetBlank?: boolean;
}) => (
  <Card className="bg-background flex flex-col justify-between">
    <CardHeader>
      {/* Card Header with Icon and Title */}
      <CardTitle className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        {title}
      </CardTitle>
      {/* Card Description with Bullet Points */}
      <CardDescription className="mt-4">
        {description}
        <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardDescription>
    </CardHeader>
    {/* Footer Button */}
    <CardFooter>
      <a
        href={buttonLink}
        className="w-full"
        target={targetBlank ? "_blank" : undefined}
      >
        <Button className="w-full">
          <ButtonIcon className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </a>
    </CardFooter>
  </Card>
);

const InfoCards = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        {/* Join Our Teams Card */}
        <InfoCard
          icon={Users}
          title="Join Microsoft Teams"
          description="Join our group chat with integrated calendars and meetings. This acts as our single source of communication for all channels in the organization."
          points={[]}
          buttonText="Join Teams"
          buttonIcon={Users}
          buttonLink={"/team"}
          targetBlank={false}
        />

        {/* Create Account Card */}
        <InfoCard
          icon={LogIn}
          title="Create Account"
          description="Your account gives you access to:"
          points={[
            "Event notifications",
            "Access to comments on events",
            "Official membership",
          ]}
          buttonText="Sign In / Register"
          buttonIcon={LogIn}
          buttonLink={"/auth/sign-in"}
          targetBlank={true}
        />

        {/* Join Sessions Card */}
        <InfoCard
          icon={Calendar}
          title="Join Our Sessions"
          description="Upcoming events include:"
          points={[
            "Tech talks from industry experts",
            "Hands-on project development",
            "Interview prep sessions",
            "Social networking events",
          ]}
          buttonText="View Events"
          buttonIcon={Calendar}
          buttonLink={"/events"}
          targetBlank={false}
        />
      </div>
    </div>
  );
};

export default InfoCards;

import { SectionTitle } from "@/features/base";
import { Award, Book, Trophy, Users } from "lucide-react";

// Reusable Benefit Item Component
const BenefitItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    {/* Icon */}
    <Icon className="h-6 w-6 text-blue mt-1" />
    {/* Title and Description */}
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Benefits() {
  return (
    <div className="space-y-6">
      {/* Section Title */}
      <SectionTitle
        title="Why join us?"
        subtitle="Gain a series of great benefits through GDSC"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Benefit Items */}
        <BenefitItem
          icon={Trophy}
          title="Build Your Portfolio"
          description="Work on real projects that you can showcase to future employers"
        />
        <BenefitItem
          icon={Users}
          title="Network with Peers"
          description="Connect with like-minded students and industry professionals"
        />
        <BenefitItem
          icon={Book}
          title="Learn New Skills"
          description="Access workshops, mentorship, and hands-on learning opportunities"
        />
        <BenefitItem
          icon={Award}
          title="Join Conferences"
          description="Get invited to national conferences for the best opportunities"
        />
      </div>
    </div>
  );
}

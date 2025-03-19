import { SectionTitle } from "@/features/base";

interface EventDescriptionProps {
  description: string;
}

export default function EventDescription({
  description,
}: EventDescriptionProps) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Description" />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

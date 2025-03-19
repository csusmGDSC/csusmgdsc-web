import { AvatarCard } from "@/components/ui/avatar-card";
import { SectionTitle } from "@/features/base";
import { User } from "@/types/user";

export default function EventOrganizers({
  organizers,
}: {
  organizers: User[];
}) {
  return (
    <div className="space-y-4">
      <SectionTitle title="Organizers" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {organizers.map((organizer, index) => (
          <AvatarCard
            key={index}
            fullName={organizer.full_name || "No Name"}
            imageSrc={organizer.image || "https://avatar.iran.liara.run/public"}
            userId={organizer.id}
            email={organizer.email}
            className="w-full py-2"
            imageClassName="size-12"
          />
        ))}
      </div>
    </div>
  );
}

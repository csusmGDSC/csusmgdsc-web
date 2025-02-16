import { AvatarCard } from "@/components/ui/avatar-card";
import { SectionTitle } from "@/features/base";

const mockUsers = [
  {
    id: "user-001",
    first_name: "John",
    last_name: "Doe",
    email: "D5XbX@example.com",
    image: "https://avatar.iran.liara.run/public",
  },
  {
    id: "user-002",
    first_name: "Jane",
    last_name: "Doe",
    email: "D5XbX@example.com",
    image: "https://avatar.iran.liara.run/public",
  },
  {
    id: "user-003",
    first_name: "John",
    last_name: "Doe",
    email: "D5XbX@example.com",
    image: "https://avatar.iran.liara.run/public",
  },
  {
    id: "user-004",
    first_name: "Jane",
    last_name: "Doe",
    email: "D5XbX@example.com",
    image: "https://avatar.iran.liara.run/public",
  },
];

export default function EventOrganizers({
  organizerIds,
}: {
  organizerIds: string[];
}) {
  console.log("ORGANIZERS: ", organizerIds);
  return (
    <div className="space-y-4">
      <SectionTitle title="Organizers" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockUsers.map((organizer, index) => (
          <AvatarCard
            key={index}
            fullName={`${organizer.first_name} ${organizer.last_name}`}
            imageSrc={organizer.image}
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

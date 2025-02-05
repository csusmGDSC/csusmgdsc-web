import { useUsers } from "@/api/user-api";
import { PageContent, PageHeader } from "@/features/base";
import { MemberList, MembersFilter } from "@/features/team";
import { GDSC_POSITIONS } from "@/types/gdsc-user";
import { Loader2 } from "lucide-react";

const POSITION_LABELS: Record<(typeof GDSC_POSITIONS)[number], string> = {
  leader: "Technical Leads",
  student: "Students",
  alumni: "Alumni",
  mentor: "Mentors",
  advisor: "Advisors",
  sponsor: "Sponsors",
};

const POSITION_ORDER = [
  "leader",
  "student",
  "advisor",
  "alumni",
  "mentor",
  "sponsor",
];

export default function TeamPage() {
  const { data: users, isLoading } = useUsers();

  const filteredUsers = (position: (typeof GDSC_POSITIONS)[number]) => {
    console.log("TODO: Filter users by position", position);
    return users.filter(
      (user) => user.full_name //&&
      // IOTA_TO_GDSC_POSITION[user.position as number] === position
    );
  };

  const sortedPositions = [...GDSC_POSITIONS].sort(
    (a, b) => POSITION_ORDER.indexOf(a) - POSITION_ORDER.indexOf(b)
  );

  return (
    <main>
      <PageHeader
        title="Team"
        subTitle="Meet the team behind GDSC-CSUSM"
        backgroundImageSrc="/images/placeholder/homeBackground-4.jpg"
      />
      <PageContent>
        <MembersFilter />
        {isLoading ? (
          <Loader2 className="animate-spin text-blue mx-auto size-10" />
        ) : filteredUsers.length > 0 ? (
          sortedPositions.map((position) => (
            <MemberList
              key={position}
              members={filteredUsers(position)}
              group={POSITION_LABELS[position]}
            />
          ))
        ) : (
          <p className="text-primary text-2xl font-bold">No users found</p>
        )}
      </PageContent>
    </main>
  );
}

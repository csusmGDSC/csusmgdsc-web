import { useUsers } from "@/api/user-api";
import { PageContent, PageHeader } from "@/features/base";
import { MemberList, MembersFilter } from "@/features/team";
import { useFilteredUsers } from "@/hooks/use-filtered-users";
import { GDSC_POSITIONS } from "@/types/gdsc-user";

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
  const { setSearchQuery, setSelectedTags, selectedTags, filteredUsers } =
    useFilteredUsers(users);

  const sortedPositions = [...GDSC_POSITIONS].sort(
    (a, b) => POSITION_ORDER.indexOf(a) - POSITION_ORDER.indexOf(b)
  );

  // const getUsersByPosition = (position: (typeof GDSC_POSITIONS)[number]) => {
  //   return filteredUsers.filter((user) => user.position === position);
  // };

  return (
    <main>
      <PageHeader
        title="Team"
        subTitle="Meet the team behind GDSC-CSUSM"
        backgroundImageSrc="/images/placeholder/homeBackground-4.jpg"
      />
      <PageContent>
        <MembersFilter
          setSearchQuery={setSearchQuery}
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
        />
        {sortedPositions.map((position) => (
          <MemberList
            key={position}
            members={filteredUsers}
            group={POSITION_LABELS[position]}
            skeletonMode={isLoading}
          />
        ))}
      </PageContent>
    </main>
  );
}

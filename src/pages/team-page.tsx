import { useUsers } from "@/api/user-api";
import { PageContent, PageHeader } from "@/features/base";
import { MemberList, MembersFilter } from "@/features/team";
import {
  GDSC_BRANCHES,
  GDSC_POSITIONS,
  IOTA_TO_GDSC_BRANCH,
} from "@/types/gdsc-user";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [filteredUsers, setFilteredUsers] = useState(users || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<
    (typeof GDSC_BRANCHES)[number][]
  >([]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(
      users.filter((user) =>
        (user.full_name || "").toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  useEffect(() => {
    // Since users may not be immediately available, return early if there are no users. This won't affect selecting tags
    if (!users || selectedTags.length === 0 || users.length === 0) {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(
      users.filter((user) =>
        selectedTags.some(
          (tag) => tag === IOTA_TO_GDSC_BRANCH[user?.branch as number]
        )
      )
    );
  }, [selectedTags]);

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
        <MembersFilter
          setSearchQuery={setSearchQuery}
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
        />
        {isLoading ? (
          <Loader2 className="animate-spin text-blue mx-auto size-10" />
        ) : users.length > 0 ? (
          sortedPositions.map((position) => {
            const members = filteredUsers; //.filter(
            //   (user) => user.position === position
            // );
            return members.length > 0 ? (
              <MemberList
                key={position}
                members={members}
                group={POSITION_LABELS[position]}
              />
            ) : null;
          })
        ) : (
          <p className="text-primary text-2xl font-bold">No users found</p>
        )}
      </PageContent>
    </main>
  );
}

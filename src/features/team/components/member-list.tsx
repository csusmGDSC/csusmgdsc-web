import MemberCard from "./member-card";
import { IOTA_TO_GDSC_BRANCH, User } from "@/types/user";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionTitle } from "@/features/base";

interface MemberListProps {
  group: string;
  members?: User[];
  skeletonMode?: boolean;
}

const MemberList = ({ group, members, skeletonMode }: MemberListProps) => {
  if (skeletonMode) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <Skeleton className="aspect-square w-full" key={index} />
        ))}
      </div>
    );
  }

  if (!members || members.length === 0) {
    return null;
  }

  return (
    <section id={group} className="space-y-2">
      <SectionTitle title={group} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.full_name || "No Name"}
            role={IOTA_TO_GDSC_BRANCH[member.branch || 0] || "No Role"}
            imageSrc={member.image || "https://avatar.iran.liara.run/public"}
            userId={member.id}
          />
        ))}
      </div>
    </section>
  );
};

export default MemberList;

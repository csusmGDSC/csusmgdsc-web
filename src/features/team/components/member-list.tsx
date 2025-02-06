import Title from "@/components/ui/title";
import MemberCard from "./member-card";
import { IOTA_TO_GDSC_BRANCH, User } from "@/types/gdsc-user";

interface MemberListProps {
  group: string;
  members: User[];
}

const MemberList = ({ group, members }: MemberListProps) => {
  return (
    <section id={group}>
      <Title>{group}</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.full_name || "No Name"}
            role={IOTA_TO_GDSC_BRANCH[member.branch as any] || "No Role"}
            imageSrc={member.image || "https://avatar.iran.liara.run/public"}
            userId={member.id}
          />
        ))}
      </div>
    </section>
  );
};

export default MemberList;

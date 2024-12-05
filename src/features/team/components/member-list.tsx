import Title from "@/components/ui/title";
import MemberCard from "./member-card";

interface MemberListProps {
  group: string;
  members: {
    name: string;
    role: string;
    imageSrc: string;
    userId: string;
  }[];
}

const MemberList = ({ group, members }: MemberListProps) => {
  return (
    <section id={group}>
      <Title>{group}</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <MemberCard
            key={member.userId}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            userId={member.userId}
          />
        ))}
      </div>
    </section>
  );
};

export default MemberList;

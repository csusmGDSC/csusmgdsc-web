import { PageContent, PageHeader } from "@/features/base";
import { MemberList, MembersFilter } from "@/features/team";

const president = [
  {
    name: "Aaron Hamilton",
    role: "President",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "1",
  },
];

const leads = [
  {
    name: "Jaedon Spurlock",
    role: "Technical Lead",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "2",
  },
  {
    name: "Gabriel Tellez Ornales",
    role: "Technical Lead",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "3",
  },
  {
    name: "Thanh Dat Vu",
    role: "Interview Lead",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "4",
  },
  {
    name: "Jacob Almon",
    role: "Interview Lead",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "5",
  },
];

const members = [
  {
    name: "John Doe",
    role: "Technical",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "1",
  },
  {
    name: "Jane Smith",
    role: "Interview",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "2",
  },
  {
    name: "Alice Johnson",
    role: "Marketing",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "3",
  },
  {
    name: "Bob Williams",
    role: "Other",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "4",
  },
  {
    name: "Charlie Brown",
    role: "Technical",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "5",
  },
  {
    name: "Diana Wilson",
    role: "Interview",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "6",
  },
  {
    name: "Eve Davis",
    role: "Marketing",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "7",
  },
  {
    name: "Frank Miller",
    role: "Other",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "8",
  },
  {
    name: "Grace Moore",
    role: "Technical",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "9",
  },
  {
    name: "Henry Taylor",
    role: "Interview",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "10",
  },
  {
    name: "Isabella Anderson",
    role: "Marketing",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "11",
  },
  {
    name: "Jack Thomas",
    role: "Other",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "12",
  },
  {
    name: "Karen White",
    role: "Technical",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "13",
  },
  {
    name: "Luke Harris",
    role: "Interview",
    imageSrc: "https://avatar.iran.liara.run/public",
    userId: "14",
  },
];

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        title="Team"
        subTitle="Meet the team behind GDSC-CSUSM"
        backgroundImageSrc="/images/placeholder/homeBackground-4.jpg"
      />
      <PageContent>
        <MembersFilter />
        <MemberList group="President" members={president} />
        <MemberList group="Leads" members={leads} />
        <MemberList group="Members" members={members} />
      </PageContent>
    </main>
  );
}

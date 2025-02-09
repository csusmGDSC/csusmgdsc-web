import { useEvents } from "@/api/event-api";
import { useUsers } from "@/api/user-api";
import StatCard from "@/features/admin/components/stat-card";
import { DollarSign } from "lucide-react";
import { FaProjectDiagram } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { MdEvent } from "react-icons/md";

const stats = [
  { title: "Events", valueKey: "events", icon: MdEvent, color: "blue" },
  { title: "Members", valueKey: "team", icon: IoPeopleCircle, color: "red" },
  { title: "Projects", value: 3, icon: FaProjectDiagram, color: "yellow" },
  { title: "Funding", value: "$0", icon: DollarSign, color: "green" },
];

export default function DashboardPage() {
  const { data: team } = useUsers();
  const { data: events } = useEvents();

  return (
    <main className="m-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ title, valueKey, value, icon, color }) => (
            <StatCard
              key={title}
              title={title}
              value={
                valueKey
                  ? valueKey === "events"
                    ? events?.length || 0
                    : team?.length
                  : value || 0
              }
              Icon={icon}
              color={color}
            />
          ))}
        </div>
        <div className="min-h-[800px] flex-1 rounded-sm border border-border" />
      </div>
    </main>
  );
}

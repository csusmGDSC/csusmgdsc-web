"use client";

import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";

import {
  TableActionButton,
  TableActionButtonProps,
} from "./table-action-button";
import { DataTable } from "./data-table";
import { UserTableColumns } from "./users-column-def";
import { useUsers } from "@/api/user-api";
import { QUERY_KEYS } from "@/config/query-keys";
import { useQueryClient } from "@tanstack/react-query";
import StatCard from "./stat-card";
import { User } from "lucide-react";

const UsersTable = () => {
  const { data: team } = useUsers();
  const queryClient = useQueryClient();

  return (
    <div className="m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        <StatCard
          title="Project Team"
          value={team?.length || 0}
          color="blue"
          Icon={User}
        />
        <StatCard
          title="Leetcode Team"
          value={team?.length || 0}
          color="yellow"
          Icon={User}
        />
        <StatCard
          title="Marketing Team"
          value={team?.length || 0}
          color="red"
          Icon={User}
        />
        <StatCard
          title="Admins"
          value={team?.length || 0}
          color="green"
          Icon={User}
        />
      </div>
      <UsersTableActions
        refresh={() =>
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] })
        }
      />
      <DataTable columns={UserTableColumns} data={team} loading={false} />
    </div>
  );
};

export default UsersTable;

/**
 * A component that renders the actions for the events table, including a list of buttons and a filter input.
 *
 * @return {JSX.Element} The JSX element representing the events table actions.
 */
const UsersTableActions = ({ refresh }: { refresh: () => void }) => {
  const ButtonActions: TableActionButtonProps[] = [
    {
      action: "Refresh",
      icon: LuRefreshCw,
      className: "hover:text-blue/80",
      id: "refresh",
      onClick: () => {
        refresh();
      },
    },
  ];

  return (
    <div className="flex flex-row items-center pb-4 gap-4 lg:gap-0 lg:justify-between">
      <span className="flex items-center gap-4 text-blue">
        {ButtonActions.map((action) => (
          <TableActionButton key={action.action} {...action} />
        ))}
      </span>
      <span className="relative w-[20rem]">
        <Input placeholder="Filter name..." className="max-w-xs" />
        <FaSearch className="absolute right-4 top-1 translate-y-1/2 text-blue" />
      </span>
    </div>
  );
};
